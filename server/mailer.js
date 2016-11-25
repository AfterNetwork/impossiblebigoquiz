var nodemailer = require('nodemailer');
var secrets = require('./secrets.js');
var transporter = secrets.transporter;



var mailOptions = {
    from: '"Seth Koch ?" <constcodeprepmailer@gmail.com>', // sender address
    to: 'sethkoch1@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});