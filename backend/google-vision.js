const express = require('express'),
      app = express.Router(),
      cloudinary = require('cloudinary');


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
var finalImage;
const fileName = './public/images/example-expense-report.png';
cloudinary.uploader.upload(fileName, function(result) {
  console.log(result)
  finalImage = result.url
});

var vision = gcloud.vision();


app.get('/test', function(req, res) {
  vision.detectText(finalImage, function(err, text, apiResponse) {
    if(err){ console.log(err) }
    res.send(text)
  });
});

app.get('/cloud_test', function(req, res) {
  vision.detectText(finalImage, function(err, text, apiResponse) {
    if(err){ console.log(err) }
    res.send(text)
  });
});


module.exports = app;
