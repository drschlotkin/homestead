var express = require('express');
var Vegetables = require('../models/vegetables');

var router = express.Router();

router.get('/', (req, res) => {
  Vegetables.retrieveAll((err, vegetables) => {    
    if (err)
      return res.json(err);
    return res.json(vegetables);
  });
});

module.exports = router;