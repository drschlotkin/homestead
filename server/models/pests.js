const db = require('../database');

class Pests {
  static retrieveAll (callback) {
    db.query('SELECT * from pests', (err, res) => {
      if (err.error) return callback(err);
      callback(res)
    });
  }
}

module.exports = Pests;