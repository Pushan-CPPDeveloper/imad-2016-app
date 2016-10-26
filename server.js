var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articlOne={
    title: 'First Article|Pbjee',
    heading:'1st article',
    date:'20 Oct, 2016',
    content:`<p>respect to all
               ax^2+bx+c=0
              => x=(-bplusminus\/-(b^2-4ac))/2a </p> 
                <p>respect to all
               ax^2+bx+c=0
              => x=(-bplusminus\/-(b^2-4ac))/2a </p>   <p>respect to all
               ax^2+bx+c=0
              => x=(-bplusminus\/-(b^2-4ac))/2a </p>   <p>respect to all
               ax^2+bx+c=0
              => x=(-bplusminus\/-(b^2-4ac))/2a </p> `
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleone', function(req,res){ 
    res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
    
});
app.get('/articletwo', function(req,res){ 
     res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
    
});
app.get('/articlethree', function(req,res){ 
    res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
    
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
