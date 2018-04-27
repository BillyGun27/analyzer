'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.gossip',
  'myApp.newsfinder',
  'ui.bootstrap',
  'ngStorage',
  'chart.js'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  // use the HTML5 History API
//$locationProvider.html5Mode(true);

//$locationProvider
//  .html5Mode(true)
//  .hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);
