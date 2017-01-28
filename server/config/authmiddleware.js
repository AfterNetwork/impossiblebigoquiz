(function() {

  var checkToken = require('../auth/authcontroller.js');

  module.exports = function(app, express) {
    //only checks to see that the token is valid, does not check to see if user is actually in the database.  This feature will have to be added to this in the future to disable user access.  Look at auth/authcontroller.js/authenticateuser
    app.use(checkToken.checkToken);

  };

})();