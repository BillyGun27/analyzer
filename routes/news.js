var express = require('express');
var router = express.Router();

//var mongoose = require("../model/connect");

var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://bigdata:s2y78MWS6uNU1JTYqfsZNon1s3CWNVYDPeCBura64hixrbOAGNudEKSrkNGBPDQxhvEtavoM3QWZ2yqmE3w3ow%3D%3D@bigdata.documents.azure.com:10255/?ssl=true";// "mongodb://localhost:27017/";
//var url ="mongodb://localhost:27017";
var tsAll = [
  "1521470830510","1521576155003","1521638954007","1521702085002","1521813882004","1521874648033","1522022640162","1522083787010",
  "1522157190002","1522227848024","1522298358008","1522363224007","1522363224007","1522500007005","1522647457014","1522716786061",
  "1522768511005","1522849134058","1522962071008","1523009788000","1523136561001","1523250854020","1523352499004","1523416477001",
  "1523454593008","1523525432013","1523525432013","1523609791014","1523711498043","1523861150006","1523950805033","1524003069033",
  "1524058096046"
]

const webhoseio = require('webhoseio');

const client = webhoseio.config({token: 'd90435dc-535d-4a5a-995d-3dc9c2150960'});

function callNews(){
  
    const query_params = {
      "q": "thread.country:ID site_category:celebrity_fan_gossip",
      "ts":"1521470830510",
      "sort": "crawled"
    }

    client.query('filterWebContent', query_params)
    .then(output => {

          MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("analyzer");
            dbo.collection("news").insertMany( output['posts'] , function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
              });
          }); 
      //console.log(output['posts'][0]['text']); // Print the text of the first post
      //console.log(output['posts'][0]['published']); // Print the text of the first post publication date
      //console.log(output['posts'][0]['thread']['site']); // Print the site of the first post
      console.log( output['posts'].length)
      console.log( output.moreResultsAvailable );
      console.log( output.next );
      console.log( output.totalResults );
    // ultima = output.next;

    });

    //var ultima = "Ds";
    //client.query('filterWebContent', query_params)
    //.then(output => {
        //console.log(output['posts'][0]['text']); // Print the text of the first post
        //console.log(output['posts'][0]['published']); // Print the text of the first post publication date
        //console.log(output['posts'][0]['thread']['site']); // Print the site of the first post
        //console.log( output.moreResultsAvailable );
        //console.log( output.next );
      //console.log( output.totalResults );
      // ultima = output.next;
      
    //});
    //
    //console.log(ultima+" jhjh");
    // Get the next batch of posts
    //client.getNext()
    //.then(output => {
    //console.log(output['posts'][0]['thread']['site']); // Print the site of the first post
    //
    //console.log( output.moreResultsAvailable );
    //console.log( output.next );
    //console.log( output.totalResults );
    //});

}
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("analyzer");
  dbo.collection("news").find().sort({  "thread.domain_rank" : -1 ,"thread.spam_score" : -1} ).limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    //res.send(result);
    db.close();
  });
});
*/
//"thread.domain_rank" : -1 ,published : -1
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("analyzer");
    dbo.collection("news").find().sort({published : -1  }).limit(50).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
 
  

});


router.get('/site', function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("analyzer");
    dbo.collection("news").aggregate([
      { $group : { _id:"$thread.site", count:{$sum:1}} },
                 { $sort : { count : -1 } }
    ]).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
 
  

});

router.get('/date', function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("analyzer");
    dbo.collection("news").aggregate([
      { $group : { _id: {$substr:["$published",0,10]} , count:{$sum:1}} },
                 { $sort : { count : -1 } }
    ]).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
 
  

});

module.exports = router;
