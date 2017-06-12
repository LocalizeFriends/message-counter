var express = require('express'),
    counter = require('../model/message-counter');
var router = express.Router();

/* POST increment */
router.post('/', function(req, res, next) {
    counter.incrementSync();
    res.json({
        success: true
    })
});

module.exports = router;
