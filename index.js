var express = require('express');
var path    = require('path');
var app     = express();

// Set the CDN options
var options = {
    publicDir  : path.join(__dirname, 'public'),
    viewsDir   : path.join(__dirname, 'views'),
    domain     : 'yours.netdna-cdn.com',
    bucket     : 'your_backet',
    key        : 'aws_key',
    secret     : 'aws_secret',
    hostname   : 'localhost',
    port       : 1337,
    ssl        : false,
    production : true
};

// Initialize the CDN magic
var CDN = require('express-cdn')(app, options);

app.configure(function() {
    app.set('view engine', 'jade');
    app.set('view options', { layout: false, pretty: true });
    app.enable('view cache');
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));
});

app.locals({ CDN: CDN() });

app.get('/', function(req, res, next) {
    return res.render('index');
});

app.listen(1337, function() {
    console.log("Server started: http://localhost:1337");
});

