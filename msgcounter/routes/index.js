var express = require('express'),
    counter = require('../model/message-counter');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'FriendLocation / LocalizeFriends stats',
        count: counter.getCount()
    });
});

module.exports = router;
