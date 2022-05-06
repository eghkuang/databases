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


/*----SOLUTIONS------

var db = require('../db');

module.exports = {

  getAll: function (callback) {
    // fetch all messages
    // text, username, roomname, id
    var queryStr = 'SELECT messages.id, messages.texxt, messages.roomname, users.username \
                    FROM messages left outer join users ON (messages.userid = users.id) \
                    ORDER BY messages.id DESC';

                    //left outer join = result always contains the rows in the left table and all the matching rows found in the right table
                    // in our case,userID in messages must always match ID from users
                    // order messages.id in descending order

    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },

  create: function (params, callback) {
    // create a message for a user id based on the given username
    var queryStr = 'insert into messages(texxt, user_id, roomname) \
                    value (?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
  };

--------------------*/