var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index0', { title: 'Express0' });
});

module.exports = router;
