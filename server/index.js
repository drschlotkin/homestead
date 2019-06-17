const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

var db = require('./database')

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method == 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

app.use('/api/vegetables', require('./api/vegetables'));
app.use('/api/soil', require('./api/soil'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});

db.query('SELECT NOW()', (err, res) => {
  if (err.error)
    return console.log(err.error)
  console.log(`PostgreSQL connected: ${res[0].now}.`)
})

module.exports = app;
