
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('./config.js')
var Users = require('./models/newuser.js');
var Questions = require('./models/questions.js');
var JsQuestions = require('./models/jsquestions.js');
var specialRoutes = express.Router();



mongoose.connect(config.database);
app.set('superSecret', config.secret);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client' ));
app.use('/special', specialRoutes);









//request handlers

//gets questions and answers for bio quiz
app.post('/questions', function(req, res){
  var question;
  mongoose.model('questions').find(function(err,ques){

    res.json(ques);


  })

})

//gets questions and answer for js quiz
app.post('/jsquestions', function(req, res){
  mongoose.model('jsquestions').find(function(err,ques){
    res.json(ques);
  })
})


//post new usernames and passwords

app.post('/users', function(req, res){
  var user = req.body.username;
  console.log(user);
  var password = req.body.password;
  var newUser = new Users({ username: user, password: password });
  newUser.save(function (err) {
    if (err) throw(err);
    res.json('got it');
  });
});

//test authentication routes



app.post('/authenticate', function(req, res){
  Users.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
    if(!user) {
      res.json({success: false, message:'You aint in here'});
    }
    else if (user) {
      if (user.password !== req.body.password) {
        res.json({sucess: false, message:"Wrong password"});
      }
    else{
      var token = jwt.sign(user, app.get('superSecret'), {
        expiresIn: 14400
      });

    res.json({
      success: true,
      message: "Enjoy B",
      token: token
    });
  }

}
  });
});
//begin lock up

app.use(function(req, res, next) {
  var token = req.body.token

  if (token) {
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      }
      else{
        req.decoded = decoded;
        next();
      }
    });
  }
  else{
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
});

//This is the test route I want to lock up
app.post('/test', function(req, res){
  res.json({message: 'shoot'});
});



//end test

app.listen(port, function(){
  console.log('listening on port ' + port);
})

