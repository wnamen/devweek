var express = require('express');
var app = express();

// Post request to send message
app.post('https://api.flowroute.com/v2/messages', function (req, res, err) {
  if (err) {
    console.log(err);
  }
  res.send({
    "to":"7632760478",
    "from":"18553569768",
    "body":"sample request"
  });
})


module.exports = app;
