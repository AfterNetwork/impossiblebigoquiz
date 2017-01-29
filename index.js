(function() {

  var app = require('./server/server.js');
  var config = require('./server/config/config.js');

  app.listen(config.port);

})();
