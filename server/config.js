var secrets = require('./secretvars.js');
var passcode = secrets.passcode;
module.exports ={
  'secret' : 'silence',
  'database': process.env.MONGODB_URI || 'mongodb://localhost/quicktest',
  'passcode': process.env.PASSCODE || passcode

}