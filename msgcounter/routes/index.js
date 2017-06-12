var express = require('express'),
    fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('public/message-count.txt', 'utf8', function(err, count) {
        res.render('index', {
            title: 'FriendLocation / LocalizeFriends stats',
            count: count
        });
    });
});

module.exports = router;
