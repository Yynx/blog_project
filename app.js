//imported files 
const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const BlogPost = require('./src/BlogPost.js');
const Comment = require('./src/Comment.js');
const File = require('./src/fileHandler.js');
const sentimentAnalysis = require('./src/sentiApp.js');
const ml = require('ml-sentiment')();
const ourComments = require('./public/assets/blogs.json')
const jsonFilePath = 'public/assets/blogs.json';

//setup for express
const app = express();
const port = 3000;
app.engine('html', ejs.renderFile);
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.urlencoded());

//first page render
app.get('/', (req, res) => {
    jsonArray = File.readFile(jsonFilePath);

     res.render('homepage.html', { blogs: jsonArray });
});

//when for"m data is submitted
app.post('/submit', (req, res) => {

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
        jsonArray = File.readFile(jsonFilePath);
        newPost.id = jsonArray[jsonArray.length -1].id +1;
        jsonArray.push(newPost);
        File.saveFile(jsonFilePath,jsonArray);
        res.redirect('/');
    }
})


//blog creation render
app.get('/create', (req, res) => {
    res.render('form.html');
});

//gets and renders a specific blog post
app.get('/blog/:index', (req, res) => {
    let index = req.params.index;
        jsonArray = File.readFile(jsonFilePath);
        if (index > 0 && index <= jsonArray.length) {
            res.render("blogPage.html", { data: jsonArray[index - 1], index: index });
        }
        else {
            res.send(`Blog doesn't exist. Please choose an index between 1 and ${jsonArray.length}`);
        }
    
    
       
    
});

// Send sentiment.html
app.get('/sent', (req, res) => {
    res.render('sentiment.html');
});

// Define a route to send json file
app.get('/info', (req, res) => {
    const scentedComments = sentimentAnalysis(ourComments);
    res.json(scentedComments);
});


app.post('/editPost/react/:index', (req,res) =>
{
    let happy = 0;
    let neutral = 0;
    let sad = 0;
    let index = req.params.index;
    if(req.body.hasOwnProperty('happyReact.x')) happy = 1;
    else if(req.body.hasOwnProperty('neutralReact.x')) neutral = 1;
    else if(req.body.hasOwnProperty('sadReact.x')) sad = 1;
    let reactions = [happy,neutral,sad];
    jsonArray = File.readFile(jsonFilePath);
    for (i in reactions)
    {
        jsonArray[index-1].reactions[i] += reactions[i];
    }
    File.saveFile(jsonFilePath,jsonArray);
    res.redirect(`/blog/${index}`); 
    
})

app.post('/editPost/comment/:index', (req, res) => {
    //get the comment
    let content = req.body.comment;
    let author = req.body.author;
    //if the comment is not empty
    // get the index from the url of the post request
    let index = req.params.index;
    let comment = new Comment(content, author);
    jsonArray = File.readFile(jsonFilePath);
    jsonArray[index-1].comments.push(comment);
    File.saveFile(jsonFilePath,jsonArray);
    res.redirect(`/blog/${index}`);
   
});

app.listen(port, () => console.log(`Listening on ${port}`));