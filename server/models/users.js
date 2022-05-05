var db = require('../db');

module.exports = {
  getAll: function (callback) {

    db.query('SELECT * FROM users', function(err, fields) {
      if (err) {
        console.log('models ERROR: ', err);
      } else {
        console.log('fields', fields);
        callback(fields);
      }
    });
  }, // a function which produces all the messages
  create: function (newStr, callback) {
    db.query('INSERT INTO users (username, roomname) VALUES (?, ?)', [newStr.username, newStr.roomname], function(err, fields) {
      callback(err, fields);
    });
  } // a function which can be used to insert a message into the database
};