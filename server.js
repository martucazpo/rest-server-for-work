require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Mongoose is on the Loose'));

app.use(express.json());

const subscribersRouter = require('./Routes/subscribers');
app.use('/subscribers', subscribersRouter);

app.listen(PORT, () => {
    console.log('Server is forever listening on port ' + PORT);
});