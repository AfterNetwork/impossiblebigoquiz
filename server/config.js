// if(!process.env.Passcode){
//   var secrets = require('./secretpass.js');
//   var passcode = secrets.passcode;
// }
module.exports ={
  'secret' : 'silence',
  'database': process.env.MONGODB_URI || 'mongodb://localhost/quicktest',
  'passcode': process.env.PASSCODE

}