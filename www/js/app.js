'use strict';
var app = angular.module('80consult', ['angular-storage']);

var baseurl = "http://localhost:5000/api/";
//var baseurl = "http://80startups.com/api/";

app.config(['storeProvider', function (storeProvider) {
  storeProvider.setStore('sessionStorage');
}]);
