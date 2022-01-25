const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 5000;
dotenv.config();
const mongoose = require('./database/mongo-db')

app.get('/', (req,res) => {
    res.send('Hello word');
});

app.listen(port, () => {
    mongoose.connect()
    console.log(`Listening on port ${port}`);
})