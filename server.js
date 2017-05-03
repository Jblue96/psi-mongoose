var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
// urlencoded

// mongodb local, default port, name of our database
mongoose.connect('mongodb://localhost:27017/psiUserDb');

app.get('/user', function(req, res) {
  // select/read
  User.find({}, function(err, userResults) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('userResults ->', userResults);
      res.send(userResults);
    }
  })
});

app.post('/user', function(req, res) {
  console.log('in users post ->', req.body);

  var newUser = new User({
    name: req.body.name,
    username: req.body.username
  });

  // insert/create
  newUser.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('new user created');
      res.sendStatus(201);
    }
  });
});

app.listen(3004, function() {
  console.log('listening on 3004!!');
});
