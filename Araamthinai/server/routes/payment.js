const express = require('express');
const paymentRouter = express.Router();
const bcrypt = require('bcrypt');
const Payment = require('../models/Payment');


paymentRouter.post('/payment', async (req, res) => {
  try {
    const { amount } = req.body;
    const newPayment = new Payment({amount });
    await newPayment.save();
    res.status(201).json({ message: 'Payment successful' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});


module.exports = paymentRouter;
