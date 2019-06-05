const db = require('../database');

class Vegetables {
  static retrieveAll (callback) {
    db.query('SELECT * from vegetables', (err, res) => {
      if (err.error)   
        return callback(err);
      callback(res)
    });
  }
}

module.exports = Vegetables;