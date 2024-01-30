const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const authRouter = require('./routes/authRoute');

/**
 * Use mongoDB to connect to the database.
 */

dbConnect();

app.use('/', (req, res) => {
    res.send('Hello from the server side');
});

/**
 * Connect to the user.
 */

app.use('/api/user', authRouter);

/**
 * Listen on provided port.
 */

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
