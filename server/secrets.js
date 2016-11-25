var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtps://constcodeprepmailer@gmail.com:FF7765fdp@smtp.gmail.com');

exports.transporter = transporter;