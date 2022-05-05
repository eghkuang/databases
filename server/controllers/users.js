var models = require('../models');

module.exports = {
  get: function (req, res) {

    console.log('reqBody', req.body);
    models.users.getAll((err, data)=>{
      console.log('data', data);
      if (err) {
        console.log('ERROR:', err);
        res.send(err);
      } else {
        res.send(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages


  post: function (req, res) {
    // let data = [];
    // for (key in req.body) {
    //   data.push(req.body[key]);
    // }
    // data = JSON.stringify(data);
    // let msg = data.substring(1, data.length - 1);
    models.users.create(req.body, (err, oldData)=>{
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};
