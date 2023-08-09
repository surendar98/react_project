require('dotenv').config()

const app = require("express")();
const path = require("path");

const shortid = require("shortid");
const Razorpay = require("razorpay");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const { ServerApiVersion } = require('mongodb');

const connectionParams={
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}

const uri = "mongodb+srv://Surendar:Suremech123@cluster0.n4mslxq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
