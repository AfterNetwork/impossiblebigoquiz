
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
var Interviewquestions = require('./models/interviewquestions.js');
var bcrypt = require('bcryptjs');
var nodemailer = require('nodemailer');
var compression = require('compression');





mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client' ));





app.post('/forgotpass', function(req, res){
  var email = req.body.email;
  var tempPass = "A1";
  var tempPassForDb = "";
  Users.findOne({email: email}, function(err, user){
    if (err) throw (err)
    if(!user) {
      res.json({user: false})
    }
    var makeTempPass = function(){
      while(tempPass.length < 6){
        var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        var randomNum = alpha[Math.floor(Math.random() * 8)];
        tempPass += randomNum;
      }

    };
    makeTempPass();
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(tempPass, salt, function(err, hash) {
        tempPassForDb = hash;
        var transporter = nodemailer.createTransport(config.passcode);
        var mailOptions = {
          from: '"Seth Koch" <constcodeprepmailer@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Password reset", // Subject line
          text: 'Here is your temporary password :    ' + tempPass +
          '    please change it soon after logging into your account.  You can change your password in your profile once you have logged in' // plaintext body
        };
        var sendEmail = () => {
          transporter.sendMail(mailOptions, function(error, info){
            if(error){
              return console.log(error);
            }
            console.log('Message sent: ' + info.response);
          });
        };
        sendEmail();
        res.json({messageSent: true})

        user.password = tempPassForDb;
        user.save(function(err){
          if (err) throw err()
        })
        })
      })
  })
});







//create a user and send a welcome email:
app.post('/users', function(req, res){
  var user = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var passForDb = "";



  Users.findOne({username: user}, function(err, check){
    if (err) throw (err);
    //check to see if there is already that username in database
    if(check){
      res.json({duplicateUser: true})
      return;
    }
    // check to see if there is already that email in database
    Users.findOne({email: email}, function(err, check) {
      if (err) throw (err);
      if(check){

        res.json({duplicateEmail: true})
        return;
      }
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          passForDb = hash;
          var newUser = new Users({ username: user, password: passForDb, email: email, token: "" });
          newUser.save(function (err) {
            if (err) throw(err);
            res.json('got it');
          });
        });

      });

    })

  })
  var transporter = nodemailer.createTransport(config.passcode);

  var mailOptions = {
    from: '"Seth Koch ?" <constcodeprepmailer@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "You're signed up ✔", // Subject line
    text: 'Thanks', // plaintext body
    html: '<b>Thanks for joining constcodeprep</b>' // html body
};
  var signUpMail = () => {
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
};
  signUpMail();
});




//sign in authentication and sign in

app.post('/authenticate', function(req, res) {
  Users.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
    if(!user) {
      res.json({success: false, message:'You aint in here'});
    }
    if (user) {
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        res.json({sucess: false, message:"Wrong password"});
      }
      else{
        var token = jwt.sign({username: user.username}, config.secret, {
        expiresIn: "24h"

        });

        res.json({
          success: true,
          message: "Enjoy!",
          token: token
        });

        user.token = token;
        user.save(function(err){
          if (err) throw err;
        });
      }
    }
  });
});








//begin lock up, app.use will protect every route below it.  User must have a token to get through.

app.use(function(req, res, next) {
  var token = req.body.token

  if (token) {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        return res.status(403).send({ success: false, message: 'Failed to authenticate token.' });
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










//request handlers

//a hacky way to check if someone is signed in.  A post successful post request to banana will only happen if the user contains an appropriate token.
app.post('/banana', function(req, res){
  res.json('bananas');
})

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

//gets questions and answers for interviewquestions quiz

app.post('/interviewquestions', function(req, res){
  mongoose.model('interviewquestions').find(function(err,ques){
    res.json(ques);
  })
})

app.post('/addmedal', function(req, res){
  var token = req.body.token;
  var medal = req.body.medal

  Users.findOneAndUpdate({token: token}, {$push:{medals : medal}}, function (err, user){
    if (err) throw err;
  })
})

app.post('/getmedal', function(req, res) {
  var token = req.body.token;
  Users.findOne({token: token}, function(err, user){
    if (err) throw err;
    if (user) res.json(user.medals);
  })
})

app.post('/getusername', function(req, res) {
  var token = req.body.token;
  Users.findOne({token: token}, function(err, user){
    if (err) throw err;
    if (user) res.json(user.username);
  })
})


app.post('/changepassword', function(req, res) {
  var token = req.body.token;
  var newPassWord = req.body.password;
  Users.findOne({token: token}, function(err, user) {
    if (err) throw err;
    if (user) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newPassWord, salt, function(err, hash) {
          newPassWord = hash;
          user.password = newPassWord;
          user.save(function(err){
            if (err) throw err;
          });

        })
    })
  }
  })
})



app.listen(port, function(){
  console.log('listening on port ' + port);
})

