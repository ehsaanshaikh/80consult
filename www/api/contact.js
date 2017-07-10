var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
  database: 'cfo_singapore',
  user: 'cio_choice',
  password: '10gXWOqeaf',
  host: 'cxohonour.com',
});
var nodemailer = require('nodemailer');
var sleep = require('system-sleep');
var mg = require('nodemailer-mailgun-transport');
var CRUD = require('mysql-crud');
var all_cioCRUD = CRUD(db, 'all_cio');
var transporter = nodemailer.createTransport({
  host: 'in-v3.mailjet.com',
  port: '587',
  auth: {
    user: '66ca4479851e0bd9cedc629bdff36ee6',
    pass: 'a3ec60f55a89f7fab98891e86818c8db'
  }
});

//send mail function
exports.checkEmail = function(req, res){
    console.log(req.params.email);
    var email = req.params.email;

    var query = "select * from all_cio where `emailID`= '" + email + "'";

    db.query(query, function(err, rows){
        res.jsonp(rows);
        console.log(rows);
        console.log(rows.length);

        if(rows.length != 0){
          for(var i=0; i<rows.length; i++){
            var password = rows[i].password;
            console.log(password + "inside for loop");

            var recipientEmail = rows[i].emailID;
            var subject = "Please do take the opinion poll";
            // var mailbody = "Dear " + rows[i].firstname + " " + rows[i].lastname + 
            // "<br><br>Please do take the opinion poll.<br>You may <a href='http://cfo.cxohonour.com/survey?userid=" + password + "' >Click Here</a> to participate<br><br>Best wishes,<br>CFOHONOUR Team";

            // var mailbody = "Dear " + rows[i].firstname + " " + rows[i].lastname + 
            // "<br><br>Please do take the opinion poll.<br>You may <a href='http://localhost:5000/survey?userid=" + password + "' >Click Here</a> to participate<br><br>Best wishes,<br>CFOHONOUR Team";


            var mailbody = '<table>\
                               <tr>\
                                <td><img src="http://cfo.cxohonour.com/singapore/images/CFOHonourBanner.jpg" style="width:1000px;height:350px;"></td>\
                              </tr>\
                             <tr>\
                                <td><h1>Dear ' + rows[i].firstname + ' ' + rows[i].lastname + '</td>\
                              </tr>\
                              <tr>\
                              </tr>\
                              <tr>\
                                <td>Please do take the opinion poll.</td>\
                              </tr>\
                              <tr>\
                                <td>You may <a href="http://cfo.cxohonour.com/survey?userid=' + password + '">Click Here</a> to participate.<br><br><br></td>\
                              </tr>\
                              <tr>\
                                <td>Best wishes,</td>\
                              </tr>\
                              <tr>\
                                <td><h2>CFOHONOUR Team</h2></td>\
                              </tr>\
                              <tr>\
                                <td><a href="http://cfo.cxohonour.com/singapore/getintouch.html"><img src="http://cfo.cxohonour.com/singapore/images/question.png" style="width:35px;height:35px;"></a></td>\
                              </tr>\
                              <tr>\
                                <td bgcolor="#000000"><font color ="white">This e-mail was sent to ' + rows[i].emailID + 'and contains information directly related to your CFOHONOUR account. This is a one-time email. You received this email because you signed up for a CFOHONOUR account. Please do not reply to this email. If you want to contact us, please <a href="http://cfo.cxohonour.com/singapore/getintouch.html">contact us</a> directly.</font></td>\
                              </tr>\
                            </table>';

              send_mail(recipientEmail, subject, mailbody);
          }
           

        }
    })
}




function send_mail(usermail, subject, mailbody) {

  var auth = {
    auth: {
      api_key: 'key-b4687b67307cb2598abad76006bd7a4a',
      domain: '80startups.com'
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: usermail, ,
    to: 'amalina.ahmad@80startups.com', // An array if you have multiple recipients.
    subject: subject,
    'h:Reply-To': 'amalina.ahmad@80startups.com',
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

