var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('*', function(req, res) {
    res.send("<h1>yeet</h1>");
});


app.listen(8080);