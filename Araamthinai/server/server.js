const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const { ServerApiVersion } = require('mongodb');

const username = 'Surendar'; 
const password = 'Suremech123';
const hostname = 'cluster0.n4mslxq.mongodb.net'; 


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


const app = express();

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

