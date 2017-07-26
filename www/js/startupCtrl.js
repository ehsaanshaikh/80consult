app.controller('startupcontroller', function ($scope, $http, $window) {

  //----------- GET IN TOUCH ------------------------///

  $scope.apply = function (req, res) {
    $scope.data = {};
    $scope.data.first_name = $scope.first_name;
    $scope.data.last_name = $scope.last_name;
    $scope.data.email = $scope.email;
    $scope.data.phone_number = $scope.phone_number;
    $scope.data.industry = $scope.industry; 
    $scope.data.initial_capital = $scope.initial_capital; 
    $scope.data.number_directors = $scope.number_directors;
    $scope.data.description = $scope.description;

    console.log($scope.data);

    $http.post(baseurl + 'apply/', $scope.data).success(function (res) {
      if (res.status == 'false') {
      }
    }).error(function () {
      console.log("error");
    })
    document.startupapplicationform.reset();
    $("#thankyou").show();
    $("#thankyou").delay(3200).hide(300);
  }

  //----------- Success message function ------------------------///
  $scope.successMsg = function () {
  console.log("triggered");
    $("#thankyou").hide();
  }


  
});


  