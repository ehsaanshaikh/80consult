app.controller('contactcontroller', function ($scope, $http, $window) {

  //----------- Consult ------------------------///

  $scope.consult = function (req, res) { console.info("in consult");

    var postObj = {
      "first_name":  $scope.firstName || "",
      "last_name": $scope.lastName || "",
      "email": $scope.email || "",
      "mobile": $scope.phoneNumber || "",
      "description": $scope.description || "",
      "type": "Bangalore-event" || ""
    };

    $http.post(baseurl + 'create-form/', postObj)
        .success(function (res) {
          console.info("create form response", res);
      }).error(function (err) {
        console.log("error", err);
      })

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

  // Bangalore event

  //----------- Consult ------------------------///

  $scope.event1 = function (req, res) {
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

$scope.saveContactForm = function (data) {
  console.info("in ca");

}
  $scope.data = "in contact controller";

});
