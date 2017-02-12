var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Payment = require('payments.js');

// var flowRouteKey = process.env.FLOWROUTEAPIKEY;
// var flowRouteSecret = process.env.FLOWROUTEAPISECRET;
// var fromNumber = process.env.FLOWROUTENUMBER;
// var mlabUri = process.env.MLABADDRESS;

var db = mongoose.connection;


// Post request to send message
app.post('https://api.flowroute.com/v2/messages', function (req, res, err) {
  if (err) return console.log(err);
  res.send({
    "to":"17632760478",
    "from":fromNumber,
    "body":"sample request"
  });
});

app.post('/payments', function (req,res){
  console.log('Open!');

  var newPayment = new Payment({
    user:req.query.amount,
    image:req.query.amount,
    phoneNumber:req.query.amount
  });

  db.collections.payments.save(newPayment);
  res.send(newPayment);

});

module.exports = app;
