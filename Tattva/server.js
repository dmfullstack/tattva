var path = require('path');
var webpack = require('webpack');
var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');
var wpackConfig = require("./webpack.config");
var mongoose = require('mongoose');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
//var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var compiler = webpack(config);

var post = require('./webserver/routes/namespaceOperations');

var get =  require('./webserver/routes/namespaceOperations');

var app = express();

//Mongoose
var db = 'mongodb://localhost/TattvaDB';
mongoose.connect(db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connnected with mongo");
});

//express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/', express.static(path.join(__dirname, './webclient/')));

//Ruotes
app.use('/namespace', post);


app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));



//Listening to port 8081
app.listen(8081, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8081");
});
