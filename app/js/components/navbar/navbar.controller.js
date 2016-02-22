'use strict';

angular.module('ShoppingListApp')
  .controller('NavbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.menu = [];

    $scope.isCollapsed = true;
    // $scope.isLoggedIn = Auth.isLoggedIn;
    // $scope.isAdmin = Auth.isAdmin;
    // $scope.getCurrentUser = Auth.getCurrentUser;

    // $scope.logout = function() {
      // Auth.logout();
      // $location.path('/login');
    // };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);