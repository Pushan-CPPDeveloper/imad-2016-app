var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne={
    title: 'First Article|Pbjee',
    heading:'1st article',
    date:'20 Oct, 2016',
    content:`<p>
    The greatest motto of life is peace and dedication</p> 
    <p>
    The greatest motto of life is peace and dedication</p><p>
    The greatest motto of life is peace and dedication</p><p>
    The greatest motto of life is peace and dedication</p>`
};
function createTemplate(data){
    var title=data.title;
    var heading =data.heading;
    var content=data.content;
    var date=data.date;
    var htmlTemplate=`<!doctype html>
            <head>
                <title>${title}</title>
                <meta charset="UTF-8">
        <meta name="description" content="width=device-width initial scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
            </head>
            <body>
                <a href="/">return home</a>
                ${heading}
                     <div class="container">
                       ${content}
                    </div>
                 <div>
                 ${date}
                 </div>
                
            </body>
        </html>`
        ;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleone', function(req,res){ 
    res.send(createTemplate(articleOne));
    
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
