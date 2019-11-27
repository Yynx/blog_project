//imported files 
const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const BlogPost = require('./src/BlogPost.js');
const Comment = require('./src/Comment.js');
const File = require('./src/fileHandler.js');
const jsonFilePath = 'public/assets/blogs.json';
//setup for express
const app = express();
const port = 3000;
app.engine('html', ejs.renderFile);
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.urlencoded());

//first page render
app.get('', (req, res) => {
    File.readFile(jsonFilePath).then(response =>
    {  
         res.render('homepage.html',{blogs : response });
    });
});

//blog creation render
app.get('/create', (req,res) => {
    res.render('form.html');
});

//gets and renders a specific blog post
app.get('/blog/:index', (req, res) => {
    let index = req.params.index;
    File.readFile(jsonFilePath).then(response => {
        if (index > 0 && index <= response.length) {
            res.render("blogPage.html", {data : response[index - 1], index: index});
        }
        else {
            res.send(`Blog doesn't exist. Please choose an index between 1 and ${response.length}`);
        }
    })  
});

//when for"m data is submitted
app.post('/submit', (req, res) => {
    
    let title = req.body.title;
    let content = req.body.content;
    let author = req.body.author;
    //error handling for empty blog posts
    if(title !== "" && content !== ""){
        let newPost = new BlogPost(
        title,
        content,
        author
    );
   File.saveNewBlog(jsonFilePath, newPost);
   res.redirect(`/`);
    }  
});

app.post('/editPost/:index', (req, res) => {
 //get the comment
    let content = req.body.comment;
    let author = req.body.author;
    //if the comment is not empty
    // get the index from the url of the post request
    let index = req.params.index;
    let comment = new Comment(content, author);
    let udpateObj = {comment: comment}
    if(content !== "")
    {
    //get our array of blogs
    File.updateBlog(jsonFilePath, udpateObj, index);
    }
    res.redirect(`/blog/${index}`)   
});

app.listen(port, () => console.log(`Listening on ${port}`));