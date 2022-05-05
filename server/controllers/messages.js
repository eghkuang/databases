var models = require('../models');

module.exports = {
  // get: function (req, res) {}, // a function which handles a get request for all messages
  // post: function (req, res) {} // a function which handles posting a message to the database

  get: function (req, res) {
    models.messages.getAll((err, fields)=>{
      if (err) {
        throw err;
      } else {
        res.send(JSON.stringify(fields));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    let data = req.body;
    models.messages.create(data, (err, fields)=>{
      if (err) {
        throw err;
      } else {
        res.send(201);
      }
    });
  } // a function which handles posting a message to the database
};
