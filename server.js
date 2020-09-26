var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('*', function(req, res) {
    
    if (req.url) {
        
    }
    try {
        res.sendFile(path.join(__dirname + req.url));
    } catch (error) {
        res.sendFile("404.html");
    }
    
});


app.listen(8080);