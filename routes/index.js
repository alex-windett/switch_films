var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/switch-films-demo', function(req, res) {
  res.render('home/', { title: 'Express' });
});

module.exports = router;
