const express = require('express'),
      app = express.Router();
const crypto = require('crypto');

let encrypted = '';

var testData  = {
  merchantID: "SNRBNE29W2JEC",
  target_env: "https://sandbox.dev.clover.com/v2/merchant/",
  orderID: "1EMF7HJSY095Y",
  API_Token: "e6acce96-0242-7cfe-39e0-02d47c424296",
  amount: 1000,
  tipAmount: 0,
  taxAmount: 0,
  cardNumber: '4761739001010010',
  expMonth: 12,
  expYear: 2018,
  CVV: "None"
}

var fromClover = {
  modulus: "24130287975021244042702223805688721202041521798556826651085672609155097623636349771918006235309701436638877260677191655500886975872679820355397440672922966114867081224266610192869324297514124544273216940817802300465149818663693299511097403105193694390420041695022375597863889602539348837984499566822859405785094021038882988619692110445776031330831112388738257159574572412058904373392173474311363017975036752132291687352767767085957596076340458420658040735725435536120045045686926201660857778184633632435163609220055250478625974096455522280609375267155256216043291335838965519403970406995613301546002859220118001163241",
  exponent: "415029",
  prefix: "00008099",
  id: "66257982250",
  pem: "-----BEGIN CERTIFICATE----- MIICpTCCAY0CBQFOrYqoMA0GCSqGSIb3DQEBBQUAMBExDzANBgNVBAMTBlRBQ0FU MTAeFw0xMzEwMTcyMDM0MzhaFw0yMzEwMTUyMDM0MzhaMBwxGjAYBgNVBAMTEVRB Q0FUMTY2MjU3OTgyMjUwMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA vyYRQA3cS4wV9yk+6bFzA7KLDmE+D/SOP+Q5bNOPG9nUDkAPalRBz12KA5SDxTw2 vO1BIeSFUQlYTpzEDb/XkfNNm5e6nqf12M4kdHP1F2EXW4WArilUZegAVw/Y7FvA kA8PQFbfgmBirSa5GS/fuAHjemqEf0DxIgq552IDeFw3nB0vccK6ePue5sVB9Sm2 vWpKm/lj2UE4P6z2ngZr5V31cSAVN08USxHvz+MEnoUBKt6aKvfRUAp4iFyIpxlp 4eylxY8zizPekS29lcRMsI9hGug2CoKFhhUJ1gD8G280zIoWCxysNvl40k/l8OTt PKrnlhAzQcIyy/RB0lwb6QIDBlU1MA0GCSqGSIb3DQEBBQUAA4IBAQBK28H6/gdW cYmpy49DljgvnN7rYF0cQP5RIrtB7zopudHAi3OswNRHzUjCY/6HaNOAPJZN1SuP j/zrvIG30WaJuI5669wkRvpZ3ICtYbZhtLe9Gpj8iE5MwfSqJTWYFzdQGYYKNd0z gCNIJKjeULCNPEy1pfwSVatkrkusqmMbr8eMJn4Z/ODe+YCwO5Du8gvqVRV1idcW tvRr8wS43tZE3AGRbZxnkTejorCT+yFbZCj7sVUZonlhEdz5IKMr0t8wIfcy+7Jz ONcrsegDMjlj7UDu4N8A7S9Ls24m08G+Hkhs/3kqAXem0++bq3CFf0ceGJDCGTeU Nwp0D4nVh/PF -----END CERTIFICATE----- "
}

app.get('/test', function (req, res) {
const cipher = crypto.createCipher('aes192', 'a password');

// create key with fromClover.modulus fromClover.exponent

let encrypted = cipher.update(fromClover.modulus, fromClover.exponent, 'base64');
    encrypted += cipher.final('base64');
console.log("CLOVER",encrypted);

// let cardEncrypt = cipher.encrypt(testData.)


const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('base64');
console.log("PUBLIC_KEY",hash);

// const pubKey = alice.generateKeys();
 res.json({card: encrypted})
})

module.exports = app
