var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paymentSchema = new Schema({
  amount: Number,
  dueDay: Number,
  reccurring: Boolean,
  userId: Number
});

module.exports = mongoose.model('payments', paymentSchema);
