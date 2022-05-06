var models = require('../models');

module.exports = {
  // get: function (req, res) {}, // a function which handles a get request for all messages
  // post: function (req, res) {} // a function which handles posting a message to the database

  get: function (req, res) {
    models.messages.getAll((err, results)=>{
      if (err) {
        res.sendStatus(404);
      } else {
        console.log('HERE')
        res.status(200).send(results);
        //res.jaon(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('reqBody', req.body);
    models.messages.create(req.body, (err)=>{
      if (err) {
        console.log('err', err);
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};

/*---SOL-----



var models = require('../models');

module.exports = {

  get: function (req, res) {
    models.messages.getAll(function(err, results) {
      if (err) {
        console.error('Unable to retrieve messages from the database: ', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    var params = [req.body.message, req.body.username, req.body.roomname];
    models.messages.create(params, function(err, results) {
      if (err) {
        console.error('Unable to post messages to the database: ', err);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  }
  };

-------------*/