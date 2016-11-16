let express = require('express');
let WatchlistRouter = express.Router();

let WatchlistSchema = require('./watchListDetails');

WatchlistRouter.post('/post', function(req, res) {
    let watchlistSchema = new WatchlistSchema(req.body);
    watchlistSchema.save(function(err, data) {
        if (err)
        {
            return res.send('error has occured');
        }
        return res.status(200).json(data);
    });
});
WatchlistRouter.get('/get', function(req, res) {
         WatchlistSchema.find(function(err, output) {
            if (err) {
                res.send(err);
            } else {
                res.send(output);
            }
        });
});
WatchlistRouter.get('/get/:watchlist', function(req, res) {
    let str = decodeURIComponent(req.params.watchlist);
    console.log(str);
      WatchlistSchema.findOne({WatchList: str}, function(err, watchlistdata) {
    if(err) {
      //   return res.status(500).json({error:"Intentional error for testing erro scenario"});
      return res.status(500).json(err);
    }
    console.log(watchlistdata);
      return res.status(200).json(watchlistdata);
        });
    });


module.exports = WatchlistRouter;
