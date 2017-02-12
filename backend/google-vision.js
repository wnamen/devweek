const express = require('express'),
      app = express.Router(),
      cloudinary = require('cloudinary'),
      mongoose = require('mongoose'),
      db = mongoose.connection;
var Payment = require('./models/payments.js');


function getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}

// configs
cloudinary.config({
  cloud_name: 'dev-week-hack',
  api_key: process.env.IMAGE_KEY,
  api_secret: process.env.IMAGE_SECRET
});
var gcloud = require('gcloud')({
  keyFilename: 'key.json',
  projectId: 'dev-week-hack'
});

var vision = gcloud.vision();

app.get('/data', function (req, res) {
  Payment.find({}, function(err, payments) {
    res.send(payments.reduce(function(payMap, item) {
        payMap[item.id] = item;
        return payMap;
    }, {}));
});
})

app.post('/test', function(req, res) {

  var imageLink = req.body.image
  console.log(imageLink)

  var newPayment = new Payment ({
    user: "Mikey",
    image: imageLink,
    phoneNumber: '555-444-444'
  })

  newPayment.save();

  vision.detectText(imageLink, function(err, text, apiResponse) {
    if(err){ console.log(err) }
    res.json(text)
  });


  res.redirect('/success')
});


module.exports = app;
