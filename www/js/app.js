'use strict';
var app = angular.module('80consult', ['angular-storage']);
if (document.location.hostname == "80startups.com")
{
  var baseurl = "http://80startups.com/api/";

}else{

  var baseurl = "http://localhost:5000/api/";
}

app.config(['storeProvider', function (storeProvider) {
  storeProvider.setStore('sessionStorage');
}]);
