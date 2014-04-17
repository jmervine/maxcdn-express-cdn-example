'use strict';
var path = require('path');
var express = require('express');
var app = express();

// Setup options for
var options = {
    publicDir  : path.join(__dirname, 'public'),
    viewsDir   : path.join(__dirname, 'views'),
    domain     : 'yours.netdna-cdn.com',
    bucket     : 'your_bucket',
    key        : 'aws_key',
    secret     : 'aws_secret',
    hostname   : 'localhost',
    port       : 1337,
    ssl        : false,
    production : true
};

// Initialize the CDN magic
var CDN = require('express-cdn')(app, options);

// NOTE: This is the configure block that already exists in your code.
//       It's shown for placement context.
app.configure(function() {
    app.set('view engine', 'jade');
    app.set('view options', { layout: false });
    app.use(express.static(path.join(__dirname, 'public')));
});

app.locals({ CDN: CDN() });

app.get('*', function(req, res, next) {
    return res.render('index');
});

app.listen(1337, function() {
    console.log("Server started: http://localhost:1337");
});

