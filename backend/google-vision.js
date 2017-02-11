const express = require('express'),
      app = express.Router();

'use strict';
// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

// The path to the local image file, e.g. "/path/to/image.png"
const fileName = '../public/images/example-expense-report.png';

app.get('/test', function (req, res) {
  // res.json({message: "we are here"})
  // console.log(vision)

  // Performs text detection on the local file
  var result = vision.detectText(fileName)
    .then((results) => {
      console.log(results)
      const detections = results[0];

      console.log('Text:');
      detections.forEach((text) => console.log(text));
    });

  console.log(result)
})

module.exports = app;
