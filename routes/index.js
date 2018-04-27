var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
//:detail
router.get('/gossip', function(req, res, next) {
  //request.params.detail
  console.log("fssad");
  res.redirect('/#!/gossip');
// res.sendFile( path.join(__dirname , '../public/index.html') );
  //res.render('index', { title: 'Express' });
});

module.exports = router;
