var express = require('express');
var app = express();

var routedemo = require('./exp-demo3a')

//both exp-demo3a.js and exp-demo3b.js are in same directory

app.use('/routedemo', routedemo)

app.listen(3000);
