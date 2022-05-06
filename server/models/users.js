var db = require('../db');

module.exports = {
  getAll: function (callback) {

    db.query('SELECT * FROM users', function(err, results) {
      // if (err) {
      //   console.log('models ERROR: ', err);
      // } else {
      //   console.log('fields', fields);
      //   callback(fields);
      // }
      callback(err, results);
    });
  }, // a function which produces all the messages
  create: function (newStr, callback) {
    db.query('INSERT INTO users (username, roomname) VALUES (?, ?)', [newStr.username, newStr.roomname], function(err, results) {
      callback(err, results);
    });
  } // a function which can be used to insert a message into the database
};

/*----SOL------

var db = require('../db');

module.exports = {

  getAll: function (callback) {
    // fetch all users
    var queryStr = 'select * from users';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    // create a user
    var queryStr = 'insert into users(username) values (?)';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
  };

--------------*/