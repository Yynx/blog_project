//imported files 
const fs = require('fs');
const express = require('express');
const ejs = require('ejs');

//setup for express
const app = express();
const port = 3000;
app.engine('html', ejs.renderFile);
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.urlencoded());


class Comment {
    constructor(id, content, author) {
        this.content = content;
        if (author)
            this.author = author;
        else
            author = "anonymous";
    }
}
class BlogPost {
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        if (author)
            this.author = author;
        else
            author = "anonymous";
        this.comments = [];
        this.reactions = [0, 0, 0];
    }

    addComment(comment, author) {
        this.comments.push(new Comment(comment, author));
    }
}



//saves new json object to array
const saveJson = (jsonObj) => {
    fs.readFile('public/blogs.json', (err, data) => {
        if (err) throw err;
        let jsonArray;
        try {
            jsonArray = JSON.parse(data);
        }
        catch (err) {
            console.log(err);
            //unexpected end of json input due to empty json file
            jsonArray = [];
        }
        jsonObj.id = jsonArray.length + 1;
        jsonArray.push(jsonObj);
        newJsonArray = JSON.stringify(jsonArray);
        fs.writeFile("public/blogs.json", newJsonArray, () => {
        });
    });
}

//first page render
app.get('/', (req, res) => {
    res.render('blog.html');
});

//when form data is submitted
app.post('/submit', (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let author = req.body.author;
    let newPost = new BlogPost(
        1,
        title,
        content,
        author
    );
    saveJson(newPost);
    res.redirect('/');
});

app.listen(port, () => console.log(`Listening on ${port}`));


