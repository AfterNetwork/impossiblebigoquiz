var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/quicktest' );



app.use(bodyParser.json());
app.use(express.static( __dirname + '/client' ));


//model and schema
mongoose.model('questions', {questionnumber: Number, question: String, answer: String });




app.get('/questions', function(req, res){
  var question;
  mongoose.model('questions').find(function(err,ques){
    res.json(ques);

  })

})


app.listen(port, function(){
  console.log('listening on port ' + port);
})