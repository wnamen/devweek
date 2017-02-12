var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var paymentSchema = new Schema({
    user: String,
    image: String,
    phoneNumber: String
});

var Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
