const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors());

//setup routes
app.use('/users', require('./routes/userRouter'));


//setup mongoose
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if(err) throw err;
    console.log('MongoDB connection established');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
