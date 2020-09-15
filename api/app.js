const express = require('express');

const app = express();
const mongoose  = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');


app.use(bodyParser.json());
// app.use('/posts',() => {
//   console.log('Hello TEST');
// })'

//Import Routes
const registerRoute = require('./routes/register');
//const productRoute = require('./routes/products');

app.use('/register',registerRoute);
//app.use('/product',productRoute);


app.get('/', (req, res) => {
  res.send('TEST');
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true} , () => {
  console.log('Connect to DB');
})

app.listen(3000);