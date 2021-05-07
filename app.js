const express = require('express');

const hotelRouter = require('./routes/hotelRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/users', userRouter); 

module.exports = app

// c17koqExsCrGYPGa