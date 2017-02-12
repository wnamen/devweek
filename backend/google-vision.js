const express = require('express'),
      app = express.Router();

var gcloud = require('gcloud')({
  keyFilename: 'key.json',
  projectId: 'dev-week-hack'
});

var vision = gcloud.vision();


const fileName = './public/images/example-expense-report.png';

app.get('/test', function(req, res) {
  vision.detectText(fileName, function(err, text, apiResponse) {
    if(err){ console.log(err) }
    console.log(text)

    res.send(text)
  });
});


module.exports = app;
