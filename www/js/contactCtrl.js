app.controller('contactcontroller', function ($scope, $http, $window) {

  //----------- Consult ------------------------///

  $scope.consult = function (req, res) {
    $scope.data = {};
    $scope.data.firstname = $scope.firstName;
    $scope.data.lastname = $scope.lastName;
    $scope.data.email = $scope.email;
    $scope.data.phonenumber = $scope.phoneNumber;
    $scope.data.message = $scope.description;


    $http.post(baseurl + 'consult/', $scope.data).success(function (res) {
      if (res.status == 'false') {
      }
    }).error(function () {
      console.log("error");
    })
    document.contactform.reset();
    $("#thankyou").show();
    $("#thankyou").delay(3200).hide(300);
  }

  //----------- Consult ------------------------///

  $scope.expandstage1 = function (req, res) {
    $scope.data = {};
    $scope.data.firstname = $scope.firstName;
    $scope.data.lastname = $scope.lastName;
    $scope.data.email = $scope.email;
    $scope.data.phonenumber = $scope.phoneNumber;
    $scope.data.message = $scope.description;


    $http.post(baseurl + 'expand1/', $scope.data).success(function (res) {
      if (res.status == 'false') {
      }
    }).error(function () {
      console.log("error");
    })
    document.contactform.reset();
    $("#thankyou").show();
    $("#thankyou").delay(3200).hide(300);
  }

  //----------- Consult ------------------------///

  $scope.expandstage3 = function (req, res) {
    $scope.data = {};
    $scope.data.firstname = $scope.firstName;
    $scope.data.lastname = $scope.lastName;
    $scope.data.email = $scope.email;
    $scope.data.phonenumber = $scope.phoneNumber;
    $scope.data.message = $scope.description;


    $http.post(baseurl + 'expand3/', $scope.data).success(function (res) {
      if (res.status == 'false') {
      }
    }).error(function () {
      console.log("error");
    })
    document.contactform.reset();
    $("#thankyou").show();
    $("#thankyou").delay(3200).hide(300);
  }


  //----------- Success message function ------------------------///
  $scope.successMsg = function () {
  console.log("triggered");
    $("#thankyou").hide();
  }



});
