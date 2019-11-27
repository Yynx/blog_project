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
            res.render("blogPage.html", response[index - 1]);
        }
        else {
            res.send(`Blog doesn't exist. Please choose an index between 1 and ${response.length}`);
        }
    })  
});

//when form data is submitted
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
   File.saveJson(newPost);
   res.redirect(`/`);
    }
    
    
});

app.post('/comment', (req, res) => {
    //get the url of the post request
    let reqUrl = req.rawHeaders[25];
    //get the comment
    let content = req.body.comment;
    let author = req.body.author;
    //if the comment is not empty
    // get the index from the url of the post request
    let index = reqUrl.split('/')[4];
    if(content !== "")
    {
    //get our array of blogs
    File.readFile(jsonFilePath).then(response => {
        comment = new Comment(content,author);
        response[index -1].comments.push(comment);

        newJsonArray = JSON.stringify(response);
        //save the blogs back to file
        fs.writeFile("public/assets/blogs.json", newJsonArray, () => {});

        res.redirect(`/blog/${index}`);
    });
    }
    
});

app.listen(port, () => console.log(`Listening on ${port}`));

