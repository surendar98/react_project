const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  username:{type:String},
  paymentId: { type: String },
  amount:{type:String}
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
