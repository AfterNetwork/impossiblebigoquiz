var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('./config/config.js')
var Users = require('./models/newuser.js');
var Questions = require('./models/questions.js');
var JsQuestions = require('./models/jsquestions.js');
var Interviewquestions = require('./models/interviewquestions.js');
var bcrypt = require('bcryptjs');
var nodemailer = require('nodemailer');






mongoose.connect(config.database);
app.set('superSecret', config.secret);

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);
//begin lock up, app.use will protect every route below it.  User must have a token to get through.
require('./config/authmiddleware.js')(app, express);
require('./config/protectedroutes.js')(app, express);





app.listen(port, function(){
  console.log('listening on port ' + port);
})

