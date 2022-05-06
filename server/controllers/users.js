var models = require('../models');

module.exports = {
  get: function (req, res) {

    console.log('reqBody', req.body);
    models.users.getAll((err, data)=>{
      if (err) {
        res.send(err);
      } else {
        // res.send(JSON.stringify(data));
        res.json(dat);
      }
    });
  }, // a function which handles a get request for all messages


  post: function (req, res) {
    models.users.create(req.body.username, (err, oldData)=>{
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};

/*----SOL---------

var models = require('../models');

module.exports = {

  get: function (req, res) {
    models.users.getAll(function(err, results) {
      if (err) {
        console.error('Unable to retrieve users from the database: ', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    var params = [req.body.username];
    models.users.create(params, function(err, results) {
      if (err) {
        console.error('Unable to post users to the database: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
  };

-----------------*/