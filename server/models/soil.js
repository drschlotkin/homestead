const db = require('../database');

class Soil {
  static retrieveAll (callback) {
    db.query('SELECT * from soil', (err, res) => {
      if (err.error)   
        return callback(err);
      callback(res)
    });
  }
}

module.exports = Soil;