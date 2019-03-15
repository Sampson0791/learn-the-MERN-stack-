const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// body-parser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('connected to mongo db'))
    .catch(err => console.log(err))

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('server started on port:' + port));
