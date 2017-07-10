app.controller('contactcontroller', function ($scope, $http, $window) {

  //----------- GET IN TOUCH ------------------------///

  $scope.consult = function (req, res) {
    $scope.data = {};
    $scope.data.firstname = "";
    $scope.data.lastname = "";
    $scope.data.email = "";
    $scope.data.phonenumber = "";
    $scope.data.message = "";


    if (!angular.isUndefined($scope.firstname)) {
      $scope.data.firstname = $scope.firstname;
    }
    else { $scope.data.firstname = ""; }

    if (!angular.isUndefined($scope.lastname)) {
      $scope.data.lastname = $scope.lastname;
    }
    else { $scope.data.lastname = ""; }

    if (!angular.isUndefined($scope.email)) {
      $scope.data.email = $scope.email;
    }
    else { $scope.data.email = ""; }

    if (!angular.isUndefined($scope.phonenumber)) {
      $scope.data.phonenumber = $scope.phonenumber;
    }
    else { $scope.data.phonenumber = ""; }

    if (!angular.isUndefined($scope.message)) {
      $scope.data.message = $scope.message;
    }
    else { $scope.data.message = ""; }


    $http.post(baseurl + 'consult', $scope.data).success(function (res) {
      if (res.status == 'false') {
      }
    }).error(function () {
      console.log("error");
    })
    document.contact.reset();
  }

  
});
