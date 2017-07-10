
app.controller('contactcontroller', function ($scope, $http, $window) {

  //-----------------------------------------------------------------
  //**success and error message function **
//   $scope.successMsg = function () {
//     $("#thankyou").hide();
//     $("#error").hide();
//   }


  //-----------------------------------------------------------------
  //**sendContactEmail function **

  $scope.contactmail = function (req, res) {
    console.log($scope.email);

    $http.get(baseurl + 'cfo_invite/checkemail/' + $scope.email).success(function (res) {
      if (res.status == 'false') {
      } else {
        document.cfologin.reset();
        $("#thankyou").show();
        $("#thankyou").delay(3200).hide(300);
      }

    }).error(function () {

    });
  }

  //-----------------------------------------------------------------
  //**init2 function **
  $scope.init2 = function () {
    console.log(baseurl);
    console.log("init function inside");
    $http.get(baseurl + 'advisory').success(function (res) {
      if (res.status == 'false') {
      } else {
        $scope.advisory_des = res;
      }
    }).error(function () {
      console.log("error");
    })
  }
});
