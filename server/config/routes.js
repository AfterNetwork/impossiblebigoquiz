(function() {

  var userController = require('../user/usercontroller.js');

  module.exports = function(app, express) {

    app.post('/forgotpass', userController.forgotPassword);
    app.post('/users', userController.createUser);
    app.post('/authenticate', userController.authenticateUser);

  };

})();