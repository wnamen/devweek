var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Payment = require('payments.js');

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

module.exports = app;
