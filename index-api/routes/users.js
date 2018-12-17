var express = require('express');
var router = express.Router();
var mysqls = require('../mysql/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
    mysqls('select * from carlist', function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
});

module.exports = router;