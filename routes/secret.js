var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  db.bind('homework7'); //collection name
  res.render('index', { title: 'Express' });
});

module.exports = router;
