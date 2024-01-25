const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

dbConnect();

/**
 * Use mongoDB to connect to the database.
 */

app.use('/', (req, res) => {
    res.send("Hello from the server side");
});

/**
 * Listen on provided port.
 */

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
