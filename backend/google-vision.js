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
<<<<<<< HEAD

  Payment.find({}, function(err, payments) {
    if (err) return err;
    res.send(payments.reduce(function(payMap, item) {
        payMap[item.id] = item;
        return payMap;
    }, {}));
  });

=======
  Payment.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, post) {
  if(err){console.log(err)}
  console.log( post );
  })
>>>>>>> f8281c38a73057afb0966b1a911a5f1a10a5695e
})

app.post('/test', function(req, res) {

  var imageLink = req.body.image

  var newPayment = new Payment ({
    user: "Mikey",
    image: imageLink,
    phoneNumber: '555-444-444'
  })

  newPayment.save();

  vision.detectText(imageLink, function(err, text, apiResponse) {
    if(err){ console.log(err) }
<<<<<<< HEAD
    console.log(res.json(text));
=======
>>>>>>> f8281c38a73057afb0966b1a911a5f1a10a5695e
  });


  res.redirect('/customize')
});


module.exports = app;
