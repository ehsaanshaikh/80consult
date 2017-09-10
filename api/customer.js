var http = require('http');
var mysql = require('mysql');
//var db = mysql.createPool({
//    database: '80consult',
//    user: 'ftdev',
//    password: '10gXWOqeaf',
//    host: 'apps.fountaintechies.com',
//});
var db = mysql.createPool({
    database: '80consult',
    user: 'root',
    password: 'lamp',
    host: 'localhost',
});

var CRUD = require('mysql-crud');
var contactsCRUD = CRUD(db, 'contacts');
exports.createForm = function (req, res) {
    console.log("before");


    var createObj = {
        "first_name": req.body.first_name || "",
        "last_name": req.body.last_name || "",
        "email": req.body.email || "",
        "mobile": req.body.mobile || "",
        "description": req.body.description || "",
        "type": req.body.type || "",
        "json": req.body.json || "",
        created_at: new Date()
    };
    console.log("after");

    contactsCRUD.create(createObj, function (err, data) {
        console.log(data);
        res.json(data);
    });
};


exports.getAllForm = function (req, res) {
    var nric = req.params.nric;
    var type = 'note';
    var sql = "SELECT * FROM `patient_logs` WHERE `nric` = " + "'" + nric + "'" + " AND `type` = " + "'" + type + "' ORDER BY `created_at` DESC";
    db.query(sql, function (err, data) {
        res.json(data);
    });
};
//
//exports.getPatientNote = function (req, res) {
//	var nric = req.params.nric;
//	var id = req.params.id;
//	var type = 'note';
//	contactsCRUD.load({id: id, nric: nric, type: type}, function (err, data) {
//		res.json(data);
//	});
//};
//
//exports.createPatientNote = function (req, res) {
//	var createObj = {
//		customer_id: req.body.customer_id,
//		first_name: req.body.first_name,
//		last_name: req.body.last_name,
//		nric: req.params.nric,
//		type: 'note',
//		description: req.body.description,
//		created_at: new Date()
//	};
//	contactsCRUD.create(createObj, function (err, data) {
//		console.log(data)
//		res.json(data);
//	});
//};
//
//exports.updatePatientNote = function (req, res) {
//	var updateObj = {
//		first_name: req.body.first_name,
//		last_name: req.body.last_name,
//		nric: req.params.nric,
//		type: 'note',
//		description: req.body.description
//	};
//	contactsCRUD.update({id: req.params.id}, updateObj, function (err, data) {
//		res.json(data);
//	});
//};
//
//exports.deletePatientNote = function (req, res) {
//	contactsCRUD.destroy({id: req.params.id}, function (err, data) {
//		res.json(data);
//	})
//};
//function IsJsonString(str) {
//	try {
//		JSON.parse(str);
//	} catch (e) {
//		return false;
//	}
//	return true;
//}