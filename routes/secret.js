/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  MUM
  Student: #985803
  Lecture 7 / Exercise 
************************************************/

var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var mongo = require('mongoskin');

/* GET decrypted message page. */

const myDBName =  'secretDB';
var decrypted ="";
console.log('We are using Mongo database: '+ myDBName);
var db = mongo.db("mongodb://localhost:27017/secretDB",{ native_parser:true});

router.get('/', function(req, res, next) {
  const decipher = crypto.createDecipher('aes256', 'asaadsaad');

  // const encrypted =
  //     'ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03';

  db.bind('homework7');
  db.homework7.findOne({}, function(err, item){
      const encrypted =item.message;
      decrypted = decipher.update(encrypted, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      //console.log(decrypted);

      db.close();
  });

  res.send(decrypted);

});

module.exports = router;
