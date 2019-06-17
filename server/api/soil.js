var express = require('express');
var Soil = require('../models/soil');

var router = express.Router();

router.get('/', (req, res) => {
  Soil.retrieveAll((err, soil) => {    
    if (err) return res.json(err);
    return res.json(soil);
  });
});

module.exports = router;