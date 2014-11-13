var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('sendDonation', { title: 'sendDonation' });
});

module.exports = router;
