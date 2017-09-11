var connect = require('connect');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var path = require('path');
var bodyParser = require( 'body-parser' );
var nodemailer = require( 'nodemailer' );
var cors = require('cors');
var http = require("http").createServer(app);

var contact = require('./api/contact.js');
var startup = require('./api/startup.js');
var investor = require('./api/investor.js');
var customer = require('./api/customer');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Credentials', false);
  next();
});

app.use(bodyParser.json({ limit: '50mb', extended: true, type:'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, type:'application/x-www-form-urlencoding' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ limit: '50mb' }));

var www = connect();
www.use(serveStatic('www'));
app.use('/', www);

var admin = connect();
admin.use(serveStatic('admin'));
app.use('/admin', admin);

app.post('/api/expand3', contact.expand3);
app.post('/api/expand1', contact.expand1);
app.post('/api/consult', contact.consult);
app.post('/api/apply', startup.apply);
app.post('/api/incubatorapply', startup.incubatorapply);
app.post('/api/invest', investor.invest);


app.post('/api/create-form', customer.createForm);
app.get('/api/getallcustomer-form', customer.getAllForm);

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})
console.log("Magic at 5000");
