var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM Messages', function(err, files) {
      callback(err, files);
    });
  }, // a function which produces all the messages
  create: function (newStr, callback) {
    console.log('newStr username:', newStr.username);
    db.query('INSERT INTO messages(username, texxt, roomname) VALUE (? , ? , ?)', [newStr.username, newStr.message, newStr.roomname], function(err, fields) {
      callback(err, fields);
    });
  } // a function which can be used to insert a message into the database
};
