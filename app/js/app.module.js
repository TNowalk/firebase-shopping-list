'use strict';

// Create module (app)
angular.module('ShoppingListApp', ['ui.router','ui.bootstrap', 'firebase']);

// Run block for module
angular.module('ShoppingListApp').run(['$rootScope', '$location', function($rootScope, $location) {
  // If the route fails, route to /404
  $rootScope.$on('$routeChangeError', function() {
    $location.path('/404');
  });
}]);

// Config block for app
angular.module('ShoppingListApp').config([
  '$urlRouterProvider',
  '$locationProvider',
  '$stateProvider',
  function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode(true);
  }]);