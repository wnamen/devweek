const express = require('express'),
      app = express.Router(),
      cloudinary = require('cloudinary');
var Payment = require('./models/payments');

var gcloud = require('gcloud')({
  keyFilename: 'key.json',
  projectId: 'dev-week-hack'
});

var vision = gcloud.vision();

app.get('/data', function (req, res) {
  Payment.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, post) {
  if(err){console.log(err)}
  console.log( post );
  })
})

app.post('/test', function(req, res) {

  var imageLink = req.body.image
  console.log(imageLink)

  var newPayment = new Payment ({
    user: "Ben",
    image: imageLink.image,
    phoneNumber: '555-555-5555'
  })

  newPayment.save(function(err, success) {
    if (err) { console.log(err) }
    console.log("Post Success: " + success )
  })

  vision.detectText(imageLink, function(err, text, apiResponse) {
    if(err){ console.log(err) }
    console.log(text)
  });

  res.redirect('/customize')
});


module.exports = app;
