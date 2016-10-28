var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article-one':{
    title: 'First Article|Pbjee',
    heading:'1st article',
    date:'20 Oct, 2016',
    content:`<p>
    The greatest motto of life is peace and dedication</p> 
    <p>
    The greatest motto of life is peace and dedication</p><p>
    The greatest motto of life is peace and dedication</p><p>
    The greatest motto of life is peace and dedication</p>`
},
    'article-three':{
        title: 'Article three|Pbjee',
    heading:'3rd article',
    date:'22 Oct, 2016',
    content:`<p>
    The greatest demand of life is truth and justice</p> 
    <p>
    The greatest demand of life is truth and justice</p><p>
    The greatest demand of life is truth and justice</p><p>
    The greatest demand of life is truth and justice</p>`
    },
    'article-two':{
        title: 'Second Article|Pbjee',
    heading:'2nd article',
    date:'21 Oct, 2016',
    content:`<p>
    The greatest jewel of life is immortality into human hearts</p>
    <p>
    The greatest jewel of life is immortality into human hearts</p><p>
    The greatest jewel of life is immortality into human hearts</p><p>
    The greatest jewel of life is immortality into human hearts</p>
    `
    }
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
var counter=0;
app.get('/counter',function(req,res){ 
    counter=counter+1;
    res.send(counter.toString());
    
});
app.get('/:articleName', function(req,res){ 
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
