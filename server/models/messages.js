var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM Messages', function(err, files) {
      callback(err, fields);
    });
  }, // a function which produces all the messages
  create: function (str, callback) {
    db.query('INSERT INTO messages VALUES (id,' + str + ')', function(err) {
      callback(err);
    });
  } // a function which can be used to insert a message into the database
};
