const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const path = require("path");
const Payment = require('../models/Payment');

const shortid = require("shortid");
const Razorpay = require("razorpay");

// Register new user
router.post('/register', async (req, res) => {
  try {
    const { email,username, password,userType } = req.body.data;
    const newUser = new User({ email,username, password ,userType});
    await newUser.save();
    res.status(201).json({ status:true,message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ status:false,message: 'User already exists' });
  }
});


const razorpay = new Razorpay({
  key_id: 'rzp_test_gs1ywZ6rimzbAP',
  key_secret: 'OQyGVZDIwB2co75UPxi92Xdo',
});

router.post('/razorpay', async (req, res) => {
  try {
    const { amount } = req.body;
  const payment_capture = 1;
  const currency = "INR";

  const options = {
    amount: amount,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

    const response=await razorpay.orders.create(options);
    res.status(201).json({ message: 'Payment successful',
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});


router.post('/payment', async (req, res) => {
  console.log(req)
  try {
    const { username,paymentId,amount } = req.body;
    console.log(username)
    const newPayment = new Payment({username,paymentId,amount});
    await newPayment.save();
    res.status(201).json({ message: 'Payment successful' });
  } catch (error) {
    console.log(error.response)
    res.status(500).json({ message: 'An error occurred' });
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body.data;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ status:false,message: 'Authentication failed' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ status:false,message: 'Authentication failed' });
    }

    res.json({ status:true,message: 'Login successful',data:{'username':user.username,usertype:user.userType} });
  } catch (error) {
    res.status(500).json({ status:false,message: 'An error occurred' });
  }
});


// Serving company logo
router.get("/logo.png", (req, res) => {
  res.sendFile(path.join(__dirname, "logo.png"));
});


module.exports = router;
