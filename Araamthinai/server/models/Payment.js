const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  paymentId: { type: String },
  amount:{type:String}
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
