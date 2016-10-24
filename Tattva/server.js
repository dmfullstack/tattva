// var path = require('path');
// var webpack = require('webpack');
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');
// //var webpackDevServer = require('webpack-dev-server');var wpackConfig = require("./webpack.config");

// var express = require('express');
// var url = require('url');
// var app = express();
// var bodyParser=require('body-parser');
// var wpackConfig = require("./webpack.config");
// var mongoose =require('mongoose');
// var post=require('./webserver/routes/namespaceOperations');

// //Use 0.0.0.0, so that this can bind to any network interfaces (IP Address)
// wpackConfig.entry.app.unshift(
//   "webpack-dev-server/client?http://0.0.0.0:8080/",
//   "webpack/hot/dev-server");

// wpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

// var wpackCompiler = webpack(wpackConfig);

// var wpackServer = new webpackDevServer(wpackCompiler, {
//   contentBase: path.join(__dirname, 'webclient'),
//   publicPath: wpackConfig.output.publicPath,
//   hot: true
// });

// //Listening to port 8080
// wpackServer.listen(8080, '0.0.0.0', function(err, result) {
//   if (err) {
//     console.error("Error ", err);
//   }

//   console.log("Server started at 8080");
// });

// //Mongoose
// var db='mongodb://localhost/TattvaDB';
// mongoose.connect(db);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("connnected with mongo");
// });

// //express
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.use('/', express.static(path.join(__dirname, './webclient/')));

// //Routes
// app.use('/namespace', post);

// //Listening to port 8081
// app.listen(8081, '0.0.0.0', function(err, result) {
//   if (err) {
//     console.error("Error ", err);
//   }

//   console.log("Server started at 8081");
// });

var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
//var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var url = require('url');
var app = express();
var bodyParser=require('body-parser');
var wpackConfig = require("./webpack.config");
var mongoose =require('mongoose');
var post=require('./webserver/routes/namespaceOperations');
var get=require('./webserver/routes/namespaceOperations');

var compiler = webpack(config);


//Mongoose
var db='mongodb://localhost/TattvaDB';
mongoose.connect(db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connnected with mongo");
});

//express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', express.static(path.join(__dirname, './webclient/')));

//Ruotes
app.use('/namespace', post);


app.use(webpackDevMiddleware(compiler, {
 noInfo: true,
 publicPath: config.output.publicPath,
 stats: {colors: true}  
}));

app.use(webpackHotMiddleware(compiler));



//Listening to port 8081
app.listen(8081, '0.0.0.0', function(err, result) {
 if (err) {
   console.error("Error ", err);
 }

 console.log("Server started at 8081");
});
