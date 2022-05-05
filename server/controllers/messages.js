var models = require('../models');

module.exports = {
  // get: function (req, res) {}, // a function which handles a get request for all messages
  // post: function (req, res) {} // a function which handles posting a message to the database

  get: function (req, res) {
    models.messages.getAll((err, fields)=>{
      if (err) {
        res.sendStatus(404);
      } else {
        console.log('HERE')
        res.status(200).send(fields);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {

    // var data = [];
    // for (key in req.body) {
    //   data.push(req.body[key]);
    // }
    // data = JSON.stringify(data);

    // let msg = data.substring(1, data.length - 1);
    // console.log('msg: ', msg);
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
