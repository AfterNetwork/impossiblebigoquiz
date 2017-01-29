(function() {

  var express = require('express');
  var app = express();
  var mongoose = require('mongoose');
  var config = require('./config/config.js');

  mongoose.connect(config.database);

  require('./config/middleware.js')(app, express);
  require('./config/routes.js')(app, express);
  //begin lock up, app.use will protect every route below it.  User must have a token to get through.
  require('./config/authmiddleware.js')(app, express);
  require('./config/protectedroutes.js')(app, express);

  module.exports = app;

})();
