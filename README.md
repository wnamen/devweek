# Developer Week Hackathon 2017
Our team decided to tackle auto-payments using Google's Vision API, Clover's Developer Pay API and FlowRoute's SMS messaging system. The goal was to allow user's to upload personal expense reports to our application which would then be parsed by Google Vision. Once parsed, we would upload the total and set up a portal powered by Clover to complete the auto-payment. Once completed, we then used FlowRoute SMS messages to update the payment and allow the user to control/cancel the auto-payment. Unfortunately, we were unable to complete the project in time due to some integration issues. However, we were able to complete most of the front-end framework, parsing, and sms messaging.

### Authors
William Namen
Matthew Laguardia
Michael Rogachevsky

### Technology Stack
1. React
2. JavaScript
3. Node
4. Express
5. MongoDB
3. Materialize
4. Google Cloud Vision API
5. Clover Developer Pay API
6. FlowRoute
7. Cloudinary

### Minimum Requirements

1. NPM @ 3.10.3
2. Node @ v6.5.0
3. Webpack installed globally

### Recommended Requirements
1. Nodemon installed globally

### Development Instructions

1. Run "npm install" to install dependencies
2. In a separate window, run node server.js to start the server
3. Upon any changes in the code, run "webpack" to bundle the app
4. Then restart the server

If Nodemon is installed globally:
1. Run "npm install" to install dependencies
2. In a separate window, run nodemon to start the server
3. Upon any changes in the code, run "webpack" to bundle the app
