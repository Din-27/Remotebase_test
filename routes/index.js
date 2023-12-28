var express = require('express');
var router = express.Router();
var keyStore = require('../key-store')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

module.exports = router;
