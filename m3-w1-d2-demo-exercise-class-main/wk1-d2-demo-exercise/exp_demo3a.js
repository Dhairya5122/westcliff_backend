var express = require('express');
var router = express.Router();


router.get('/home', function(req, res){
    res.send("Hello World!");
}); 

router.post('/hime', function(req, res){
    res.send("YOu just send the post method at '/hello'!\n");
}); 


module.exports = router;