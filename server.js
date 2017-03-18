var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('bodyParser');
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
}); 

function hash(input){
    //how do we create hash
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return ["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
}
app.get('/hash/:input',function(req,res){
    var hashedString = hash(req.params.input,'this-is some-random-string');
    res.send(hashedString);
});
app.post('/create-user',function(req,res){
  ///user and password
  //JSON
  var Username = req.body.Username;
  var Password = req.body.Password;
  var salt = crypto.getRandomBytes(128).toString('hex');
  var dbString = hash(password,salt);
  pool.query('INSERT INTO "user1"(Username,Password) VALUES($1$2)',[Username,dbString],function(err,result){
     if(err){
         res.status(500).send(err.toString());
     }esle{
         res.send('User successfully created'+Username);
         
     }
      
  });
});



var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.send("Article-two requested and it will served here!");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
