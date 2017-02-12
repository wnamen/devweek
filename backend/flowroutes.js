var express = require('express');
var app = express();
var mongoose = require('mongoose');
var db = require('mongodb');


var flowRouteKey = process.env.FLOWROUTEAPIKEY;
var flowRouteSecret = process.env.FLOWROUTEAPISECRET;
var fromNumber = process.env.FLOWROUTENUMBER;
var mlabUri = process.env.MLABADDRESS;

// Post request to send message
app.post('https://api.flowroute.com/v2/messages', function (req, res, err) {
  if (err) {
    console.log(err);
  }
  res.send({
    "to":"17632760478",
    "from":fromNumber,
    "body":"sample request"
  });
});

app.get('/responses', function (req,res){
  console.log(db);
});

module.exports = app;
