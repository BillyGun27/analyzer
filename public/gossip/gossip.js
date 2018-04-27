'use strict';

angular.module('myApp.gossip', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gossip', {
    templateUrl: 'gossip/gossip.html',
    controller: 'GossipCtrl'
  });
}])

.controller('GossipCtrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
 

  $scope.labels = [];//["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A'];
  $scope.data = [[]];//[[65, 59, 80, 81, 56, 55, 40]];

  $http.get("https://localhost:3000/news/date").then(function (response) {

    console.log(response.data);
    //$scope.news = response.data
    for(var i=0;i< response.data.length; i++){
      $scope.labels.push(response.data[i]._id);
      $scope.data[0].push(response.data[i].count);
    }
    //console.log($scope.bar.labels);
  })

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };

$scope.colors =   [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];

//bar


$scope.bar = {};
$scope.bar.labels =[];//=  ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
$scope.bar.series = ['Series A'];

  $scope.bar.data =[];//=   [65, 59, 80, 81, 56, 55, 40] ;

  $http.get("https://localhost:3000/news/site").then(function (response) {

    console.log(response.data);
    //$scope.news = response.data
    for(var i=0;i< response.data.length; i++){
      $scope.bar.labels.push(response.data[i]._id);
      $scope.bar.data.push(response.data[i].count);
    }
    console.log($scope.bar.labels);
  })


}]);