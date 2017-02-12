var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.createConnection(process.env.MLABADDRESS ||"mongodb://admin:admin@ds149329.mlab.com:49329/easypay");

module.exports.Payment = require("./payments");
