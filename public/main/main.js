'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
  $routeProvider.when('/main/:id', {
    templateUrl: 'main/content.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
  $scope.params = $routeParams;

  $http.get(location.origin+"/news").then(function (response) {

    console.log(response.data);
    $scope.news = response.data
   // 
 })
 
}]);