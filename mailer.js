var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'poojachoudhary959@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'poojachoudhary959@gmail.com',
  to: 'pooja.chaudhary@capgemini.com',
  subject: '#CGP#',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});