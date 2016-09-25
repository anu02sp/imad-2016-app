var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function ( req,res) {
    res.send('Article one has been requested and will be served');
});

app.get('/article-two',function( req,res){
    res.send('Article two has been requested and will be served');
});

app.get('/article-three',function( req, res){
    res.send('Article three has been requested and will be served');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/Kung-Fu-Panda-2-icon.png', function(req,res){
    res.sendFile(path.join(_dirname,'ui','Kung-Fu-Panda-2-icon.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
