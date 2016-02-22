'use strict';

angular.module('ShoppingListApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'js/user/login/login.html',
        controller: 'LoginCtrl'
      });
  }]);