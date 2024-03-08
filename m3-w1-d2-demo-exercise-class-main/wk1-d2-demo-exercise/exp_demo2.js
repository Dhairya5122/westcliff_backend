var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello World!");
}); 

app.get('/hello', function(req, res){
    res.send("Hello World!");
}); 

app.post('/hello', function(req, res){
    res.send("YOu just send the post method at '/hello'!\n");
}); 


app.listen(3000);


