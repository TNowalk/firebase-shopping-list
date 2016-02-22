'use strict';

angular.module('ShoppingListApp')
  .controller('LoginCtrl', ['$scope', '$location', '$firebaseAuth', function ($scope, $location, $firebaseAuth) {
    var ref = new Firebase('https://fb-shopping-list.firebaseio.com');
    var auth = $firebaseAuth(ref);

    $scope.login = function() {
      $scope.hasError = false;

      auth.$authWithPassword({
        email: $scope.email,
        password: $scope.password
      }).then(function(authData) {
        console.log('Logged in as:', authData.uid);
      }).catch(function(e) {
        $scope.hasError = true;
      });
    };
  }]);