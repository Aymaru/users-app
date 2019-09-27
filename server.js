const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1');

const app = express();
mongoose.connect('mongodb://localhost:27527/meandb',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/', apiRouter);

// static files
app.use(express.static(path.join(__dirname, '/public/dist/users-app')));

app.listen(3000, () => {
    console.log('server on port 3000');
});

// mongod --port 27527 --dbpath \srv\mongodb\users-app-db
// npm init --yes
// npm i express
// npm rebuild node-sass
// npm i body-parser morgan
// npm i mongoose