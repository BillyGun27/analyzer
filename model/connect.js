const mongoose = require('mongoose');
//mongoose.connect('mongodb://bigdata:s2y78MWS6uNU1JTYqfsZNon1s3CWNVYDPeCBura64hixrbOAGNudEKSrkNGBPDQxhvEtavoM3QWZ2yqmE3w3ow%3D%3D@bigdata.documents.azure.com:10255/?ssl=true');
mongoose.connect('mongodb://localhost:27017/analyzer');

//mongodb://bigdata:s2y78MWS6uNU1JTYqfsZNon1s3CWNVYDPeCBura64hixrbOAGNudEKSrkNGBPDQxhvEtavoM3QWZ2yqmE3w3ow%3D%3D@bigdata.documents.azure.com:10255/?ssl=true
//mongodb://localhost:27017/analyzer

//const news = new News({ name: 'Zildjian' });
//news.save().then(() => console.log('meow'));

module.exports = mongoose;