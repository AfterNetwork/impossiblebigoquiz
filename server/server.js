
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/quicktest' );



app.use(bodyParser.json());
app.use(express.static( __dirname + '/../client' ));


//models and schemas
mongoose.model('questions', {questionnumber: Number,
                             question: String,
                             answer: String
                           });

mongoose.model('jsquestions', {questionnumber: Number,
                             question: String,
                             answer: String
                            });

var newuser = mongoose.model('users', {
                         username: {
                         type: String,
                         require: true
                         // unique: true
                         },
                         password: {
                         type: String,
                         require: true
                       }
});

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
  var password = req.body.password;
  newuser.create({username: user, password: password}, function (err, user) {
    if (err) console.log(err);
  })
  // mongoose.model('users').insert('user');
  res.json('got it');
})

app.listen(port, function(){
  console.log('listening on port ' + port);
})

