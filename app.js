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


//saves new json object to array
const saveJson = (jsonObj) => {
    fs.readFile('public/blogs.json', (err, data) => {
        if (err) throw err;
        let testData = JSON.parse(data);
        testData.push(jsonObj);
        tDJson = JSON.stringify(testData);
        fs.writeFile("public/blogs.json", tDJson, () => {
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
    let data = { title: title, content: content };
    saveJson(data);
    res.redirect('/');
});

app.listen(port, () => console.log(`Listening on ${port}`));


