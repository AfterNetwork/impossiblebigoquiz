(function() {
  // sets secrets to either be the heroku variable or, if not accessing through heroku, will be set through a file which is on the project but not pushed to github or heroku.
  var secrets = process.env.PASSCODE === undefined ? require('../secretpass.js') : 'test';
  var passcode = secrets.passcode;

  module.exports = {

    'secret': process.env.SECRET || 'happiness',
    'database': process.env.MONGODB_URI || 'mongodb://localhost/quicktest',
    'passcode': process.env.PASSCODE || passcode,
    'port': process.env.PORT || 8080

  };

})();
