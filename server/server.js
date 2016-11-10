
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');

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

app.post('/questions', function(req, res){
  var question;
  mongoose.model('questions').find(function(err,ques){

    res.json(ques);


  })

})

app.post('/jsquestions', function(req, res){
  mongoose.model('jsquestions').find(function(err,ques){
    res.json(ques);
  })
})


app.listen(port, function(){
  console.log('listening on port ' + port);
})

