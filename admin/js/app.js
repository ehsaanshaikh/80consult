'use strict';
var app = angular.module('crm', ['angular-storage']);


if (document.location.hostname == "80startups.com")
{

	var baseurl = "http://80startups.com/api/";

	app.config(['storeProvider', function (storeProvider) {
	  storeProvider.setStore('sessionStorage');
	}]);

}
else
{

	var baseurl = "http://localhost:5000/api/";
	//var baseurl = "http://crm.fountaintechies.com/api/";

	app.config(['storeProvider', function (storeProvider) {
	  storeProvider.setStore('sessionStorage');
	}]);


}

