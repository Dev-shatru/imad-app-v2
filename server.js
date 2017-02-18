var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
title: 'article-one',
heading: 'article one',
date: 'feb 18',
content:`    <p>
                This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.
            </p>
             <p>
                This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.
            </p>
            <p>
                This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.This is the content of my first web page.
            </p>`
};
function createTemplate(data) {
    var title = data.title;
    var date=data.date;
    var heading = data.heading;
    var content=data.content;
    
var htmlTemplate =
    `<html>
    <head>
    <title>
       ${title}
    </title>
    <meta name="viewport" width="width-device-width, initial-scale=1"/>
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
         ${heading}
        </h3>
        <div>
        ${date}
        </div>
        <div>
           ${content}
               </div>
    </body>

</html>';
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.send(path.join(createTemplate(articleOne));
});
app.get('/article-two', function (req, res) {
  res.send("Article-two requested and it will served here!");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
