var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.createConnection(process.env.MONGOLAB_COBALT_URI ||"mongodb://localhost/payment-database");

module.exports.Payment = require("./payments");
