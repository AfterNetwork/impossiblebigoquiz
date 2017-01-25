(function() {

  var app = require('./server/server.js');
  var config = require('./config/config.js');

  app.listen(config.port);

})();