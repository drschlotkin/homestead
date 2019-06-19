var express = require('express');
var Pests = require('../models/pests');

var router = express.Router();

router.get('/', (req, res) => {
  Pests.retrieveAll((err, pest) => {    
    if (err) return res.json(err);
    return res.json(pest);
  });
});

module.exports = router;