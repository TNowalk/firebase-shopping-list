"use strict";angular.module("ShoppingListApp",["ui.router","ui.bootstrap","firebase"]),angular.module("ShoppingListApp").run(["$rootScope","$location",function(o,t){o.$on("$routeChangeError",function(){t.path("/404")})}]),angular.module("ShoppingListApp").config(["$urlRouterProvider","$locationProvider","$stateProvider",function(o,t,n){o.otherwise("/")}]),angular.module("ShoppingListApp").config(["$stateProvider",function(o){o.state("home",{url:"/",templateUrl:"js/home/home.html",controller:"HomeCtrl"})}]),angular.module("ShoppingListApp").config(["$stateProvider",function(o){o.state("login",{url:"/login",templateUrl:"js/user/login/login.html",controller:"LoginCtrl"})}]),angular.module("ShoppingListApp").controller("NavbarCtrl",["$scope","$location",function(o,t){o.menu=[{title:"Home",link:"/"}],o.menu=[],o.isCollapsed=!0,o.isActive=function(o){return o===t.path()}}]),angular.module("ShoppingListApp").controller("HomeCtrl",function(){}),angular.module("ShoppingListApp").controller("LoginCtrl",["$scope","$location","$firebaseAuth",function(o,t,n){var i=new Firebase("https://fb-shopping-list.firebaseio.com"),r=n(i);o.login=function(){o.hasError=!1,r.$authWithPassword({email:o.email,password:o.password}).then(function(o){console.log("Logged in as:",o.uid)})["catch"](function(t){o.hasError=!0})}}]);