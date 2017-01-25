(function() {

  var dataController= require('../data/datacontroller.js');
  var userController = require('../user/usercontroller.js');

  module.exports = function(app, express) {
    //a hacky way to check if someone is signed in.  A post successful post request to banana will only happen if the user contains an appropriate token.
    app.post('/banana', dataController.bananaPudding);
    app.post('/questions', dataController.firstQuestions);
    app.post('/jsquestions', dataController.jsQuestions);
    app.post('/interviewquestions', dataController.interviewQuestions);
    app.post('/addmedal', userController.addMedal);
    app.post('/getmedal', userController.getMedal);
    app.post('/getusername', userController.getUserName);
    app.post('/changepassword', userController.changePassword);
  };

})();