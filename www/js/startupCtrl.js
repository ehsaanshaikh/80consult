app.controller('startupcontroller', function ($scope, $http, $window) {

  //----------- GET IN TOUCH ------------------------///

  $scope.apply = function (req, res) {
    $scope.data = {};
    $scope.data.first_name = $scope.first_name;
    $scope.data.last_name = $scope.last_name;
    $scope.data.email = $scope.email;
    $scope.data.phone_number = $scope.phone_number;
    $scope.data.startup_name = $scope.startup_name;
    $scope.data.industry = $scope.industry; 
    $scope.data.initial_capital = $scope.initial_capital; 
    $scope.data.number_directors = $scope.number_directors;
    $scope.data.description = $scope.description;

    console.info($scope.data);

    var postObj = {
      "first_name":  $scope.first_name || "",
      "last_name": $scope.last_name || "",
      "email": $scope.email || "",
      "mobile": $scope.phone_number || "",
      "description": $scope.description || "",
      "startup_name": $scope.startup_name || "",
      "initial_capital": $scope.initial_capital || "",
      "industry": $scope.industry || "",
      "no_of_directors": $scope.number_directors || "",
      "type": "launch-startup" || ""
    };

    $http.post(baseurl + 'create-form/', postObj)
        .success(function (res) {
          console.info("create form response", res);
        }).error(function (err) {
          console.log("error", err);
        });

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


  