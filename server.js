// server.js
var express = require('express')
var path = require('path')

var app = express()
// Need to add database


// ENV file setup
require('dotenv').config();

// serve our static stuff like index.css
app.use(express.static(__dirname))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

const googleVisionApi = require('./backend/google-vision.js');
app.use('/api/vision-res', googleVisionApi);

// Headers config
const allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    res.setHeader('Access-Control-Allow-Credentials', true)
}

app.set('port', (process.env.PORT || 6969));
app.listen(app.get('port'), function () {
    console.log('Server has started! http://localhost:' + app.get('port') + '/');
});
