var path = require('path');
var webpack = require('webpack');
var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');
var wpackConfig = require("./webpack.config");
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
//var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var compiler = webpack(config);

var Namespace = require('./webserver/DataRoutes/Namespace/namespaceOperations');
var Streams = require('./webserver/DataRoutes/Streams/streamsOperations');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', express.static(path.join(__dirname, './webclient/')));
    
//Mongoose
var db = 'mongodb://localhost/TattvaDB';
mongoose.connect(db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connnected with mongo");
});

//express


//Ruotes
app.use('/namespace', Namespace);
app.use('/stream',Streams);


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
