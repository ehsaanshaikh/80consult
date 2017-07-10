var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
  database: '80consult',
  user: 'cio_choice',
  password: '10gXWOqeaf',
  host: 'cxohonour.com',
});

var CRUD = require('mysql-crud');
var consult = CRUD(db, 'contact');

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var transporter = nodemailer.createTransport({
  host: 'in-v3.mailjet.com',
  port: '587',
  auth: {
    user: '66ca4479851e0bd9cedc629bdff36ee6',
    pass: 'a3ec60f55a89f7fab98891e86818c8db'
  }
});

////-----------------CONTACT-----------------

exports.consult = function (req, res) {
  var firstName = req.body.firstname;
  var lastName = req.body.lastname;
  var email = req.body.email;
  var phoneNumber = req.body.phoneNumber;
  var message = req.body.message;

  console.log(firstName);
  console.log(lastName);
  console.log(phoneNumber);
  console.log(email);
  console.log(message);

  consult.create({
    'First_Name': firstName,
    'Last_Name': lastName,
    'Email': email,
    'Phone_Number': phoneNumber,
    'Message': message
  }, function (err, vals) {

    if (!err) {
      var resdata = {
        status: true,
        message: 'user message successfully added'
      };
      //res.jsonp(resdata);
    } else {
      var resdata = {
        status: false,
        message: 'record not added '
      };
      //res.jsonp(resdata);
    }
  });
}

///____________________END______________________

function send_mail(usermail, subject, mailbody) {

  var auth = {
    auth: {
      api_key: 'key-b4687b67307cb2598abad76006bd7a4a',
      domain: '80startups.com'
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: usermail,
    to: 'amalina.ahmad@80startups.com', // An array if you have multiple recipients.
    subject: subject,
    'h:Reply-To': 'operations@80startups.com',
    //You can use "html:" to send HTML email content. It's magic!
    html: mailbody,
    //You can use "text:" to send plain-text content. It's oldschool!
    text: mailbody
  }, function(err, info) {
    if (err) {
      console.log('Error: ' + err);
    } else {
      console.log('Response: ' + info);
    }
  });
};