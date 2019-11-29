//imported files 
const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const BlogPost = require('./src/BlogPost.js');
const Comment = require('./src/Comment.js');
const File = require('./src/fileHandler.js');
const sentimentAnalysis = require('./src/sentiApp.js');
const ml = require('ml-sentiment')();
const ourComments = require('./public/assets/blogs.json');
console.log(ourComments);
const jsonFilePath = 'public/assets/blogs.json';

//setup for express
const app = express();
const port = process.env.PORT || 3000;
app.engine('html', ejs.renderFile);
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.urlencoded());

//first page render
app.get('/', (req, res) => {
    jsonArray = File.readFile(jsonFilePath);

    res.render('homepage.html', { blogs: jsonArray });
});


//submit a new blogpost
app.post('/submit', (req, res) => {

    //building blog post
    let title = req.body.title;
    let content = req.body.content;
    let author = req.body.author;
    let gif = req.body.gif;
    //error handling for empty blog posts
    if (title !== "" && content !== "") {
        let newPost = new BlogPost(
            title,
            content,
            author
        );
        newPost.gif = gif;
        //read blog post array from file
        jsonArray = File.readFile(jsonFilePath);
        //set id of blogpost
        newPost.id = jsonArray[jsonArray.length - 1].id + 1;
        //save blogpost to file
        jsonArray.push(newPost);
        File.saveFile(jsonFilePath, jsonArray);
        sentimentAnalysis(ourComments);
        res.redirect('/');
    }
})


//blog creation render
app.get('/create', (req, res) => {
    res.render('form.html');
});

//gets and renders a specific blog post
app.get('/blog/:index', (req, res) => {
    //get id of blogpost from index
    let index = req.params.index;
    //read blog post array from file
    jsonArray = File.readFile(jsonFilePath);
    //find blogPost from array via index
    let currBlog;
    for (blog of jsonArray) {
        if (blog.id = index) currBlog = blog;
    }
    //check if this blog exists before rendering
    if (index > 0 && index <= jsonArray[jsonArray.length - 1].id) {
        res.render("blogPage.html", { data: currBlog, index: index });
    }
    else {
        res.send(`Blog doesn't exist. Please choose an index between 1 and ${jsonArray[jsonArray - 1].id}`);
    }

});

//handle reaction to blog post
app.post('/editPost/react/:index', (req, res) => {   //get id of blogpost from index
    let index = req.params.index;
    //build reaction array
    let happy = 0;
    let neutral = 0;
    let sad = 0;
    if (req.body.hasOwnProperty('happyReact.x')) happy = 1;
    else if (req.body.hasOwnProperty('neutralReact.x')) neutral = 1;
    else if (req.body.hasOwnProperty('sadReact.x')) sad = 1;
    let reactions = [happy, neutral, sad];

    //read blog post array from file
    jsonArray = File.readFile(jsonFilePath);

    //find blogPost from array via index  and update reactions
    let currBlog;
    for (blogIndex in jsonArray) {
        if (jsonArray[blogIndex].id = index) {
            for (i in reactions) {
                jsonArray[blogIndex].reactions[i] += reactions[i];
            }
        }
    }
    //save blogpost to file
    File.saveFile(jsonFilePath, jsonArray);
    sentimentAnalysis(ourComments);
    res.redirect(`/blog/${index}`);
})

app.post('/editPost/comment/:index', (req, res) => {
    //get id of blogpost from index
    let index = req.params.index;
    //get the comment
    let content = req.body.comment;
    let author = req.body.author;
    let comment = new Comment(content, author);
    //read blog post array from file
    jsonArray = File.readFile(jsonFilePath);
    //find blogPost from array via index and update comments
    let currBlog;
    for (blogIndex in jsonArray) {
        if (jsonArray[blogIndex].id = index) jsonArray[blogIndex].comments.push(comment);
    }
    res.redirect(`/blog/${index}`)
    //save blogpost to file
    File.saveFile(jsonFilePath, jsonArray);
    sentimentAnalysis(ourComments);
    res.redirect(`/blog/${index}`);
});
//sentiment start
// Define a route to send json file
app.get('/info', (req, res) => {
    res.json(sentimentAnalysis(ourComments));
});
// Send sentiment.html
app.get('/sent', (req, res) => {
    sentimentAnalysis(ourComments);
    res.render('sentiment.html');
});
// // Define a route to send json file
// app.get('/info', (req, res) => {
//     const scentedComments = sentimentAnalysis(ourComments);
//     res.json(scentedComments);
// });
//sentiment end



app.listen(port, () => console.log(`Listening on ${port}`));