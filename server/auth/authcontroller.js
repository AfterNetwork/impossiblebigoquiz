(function() {

  var config = require('../config/config.js');
  var jwt = require('jsonwebtoken');

  module.exports = {

    checkToken: function(req, res, next) {
      var token = req.body.token;
      if (token) {
        jwt.verify(token, config.secret, function(err, decoded) {
          if (err) {
            return res.status(403).send({ success: false, message: 'Failed to authenticate token.' });
          } else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        return res.status(403).send({
          success: false,
          message: 'No token provided.'
        });
      }
    }
  };

})();
