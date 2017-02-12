const express = require('express'),
      app = express.Router(),
      cloudinary = require('cloudinary'),
      mongoose = require('mongoose'),
      db = mongoose.connection;
var Payment = require('./models/payments.js');


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
  
})

app.post('/test', function(req, res) {

  var imageLink = req.body.image
  console.log(imageLink)

  var newPayment = new Payment ({
    user: "Mikey",
    image: imageLink.image,
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
