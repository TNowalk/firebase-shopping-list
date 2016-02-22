'use strict';

angular.module('ShoppingListApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
      });
  }]);