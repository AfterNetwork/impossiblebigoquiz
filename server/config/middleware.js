(function() {

  var morgan = require('morgan');
  var bodyParser = require('body-parser');
  var compression = require('compression');

  module.exports = function(app, express) {

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(compression());
    app.use(express.static(__dirname + '/../../client'));

  };

})();