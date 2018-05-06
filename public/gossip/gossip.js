'use strict';

angular.module('myApp.gossip', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gossip', {
    templateUrl: 'gossip/gossip.html',
    controller: 'GossipCtrl'
  });
  $routeProvider.when('/search', {
    templateUrl: 'gossip/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('GossipCtrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
 //
 //$scope.months = [{val:"04",name:"April"}, {val:"05",name:"Mei"}];
 $scope.months = {
  available: [
    {val:"04",name:"April"}, {val:"05",name:"Mei"}
  ],
  selected: {val:"04",name:"April"} //This sets the default value of the select in the ui
  };
  $scope.radioModel = 'Hari';
  $scope.selectedDate = 4;
 // $scope.selectedMonth = {val:"04",name:"April"} ;
  //

//
  $scope.labels = [];//["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A'];
  $scope.data = [[]];//[[65, 59, 80, 81, 56, 55, 40]];

  //line
  /*
  Caller();
  function Caller(){
      $http.get(location.origin+"/news/date").then(function (response) {

        console.log(response.data);
        //$scope.news = response.data
        for(var i=0;i< response.data.length; i++){
          $scope.labels.push(response.data[i]._id);
          $scope.data[0].push(response.data[i].count);
        }
        //console.log($scope.bar.labels);
      })  
  }*/

 
$scope.setday = function (month,day){
 
 //alert(month+" ",day);
  $http.get(location.origin+"/news/filter/day/"+month+"/"+("0"+day).slice(-2) ).then(function (response) {
//console.log( location.origin+"/news/filter/day/"+month+"/"+("0"+day).slice(-2) );
    $scope.labels = [];
    $scope.data = [[]];
    console.log(response.data);
    //$scope.news = response.data
    for(var i=0;i< response.data.length; i++){
      $scope.labels.push(response.data[i]._id.hour);
      $scope.data[0].push(response.data[i].count);
    }
    //console.log($scope.bar.labels);
  })  

  var data = {
    prop : "published",
    search:  "2018-"+month+"-"+("0"+day).slice(-2)
  };

//location.origin+"/news/filter/search"
 $http.post(location.origin+"/news/filter/search", data).then(function (response) {
  console.log("news");
  //console.log( JSON.stringify(data) );
  //console.log(response.data);
  $scope.news = response.data
})



}
$scope.setday($scope.months.selected.val ,$scope.selectedDate);

$scope.setmonth = function (month){
 
  //alert(month+" ",day);
   $http.get(location.origin+"/news/filter/month/"+month ).then(function (response) {
 //console.log( location.origin+"/news/filter/day/"+month+"/"+("0"+day).slice(-2) );
     $scope.labels = [];
     $scope.data = [[]];
     console.log(response.data);
     //$scope.news = response.data
     for(var i=0;i< response.data.length; i++){
       $scope.labels.push(response.data[i]._id.day);
       $scope.data[0].push(response.data[i].count);
     }
     //console.log($scope.bar.labels);
   })  
 
   var data = {
     prop : "published",
     search:  "2018-"+month
   };
 
 //location.origin+"/news/filter/search"
  $http.post(location.origin+"/news/filter/search", data).then(function (response) {
   console.log("news");
   //console.log( JSON.stringify(data) );
   //console.log(response.data);
   $scope.news = response.data
 })
 
 
 
 }
 $scope.setmonth($scope.months.selected.val );

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

  $http.get( location.origin+"/news/site").then(function (response) {

    console.log(response.data);
    //$scope.news = response.data
    for(var i=0;i< response.data.length; i++){
      $scope.bar.labels.push(response.data[i]._id);
      $scope.bar.data.push(response.data[i].count);
    }
    console.log($scope.bar.labels);
  })


}])
.controller('SearchCtrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
  $scope.params = $routeParams;
  $scope.keywords;

  $scope.search = function (){
 
     var data = {
       prop : "text",
       search:   $scope.keywords
     };
   
   //location.origin+"/news/filter/search"
    $http.post(location.origin+"/news/filter/search", data).then(function (response) {
     console.log("news");
     //console.log( JSON.stringify(data) );
     //console.log(response.data);
     $scope.news = response.data
   })
   
   
   
   }
  // $scope.setmonth($scope.months.selected.val );
 
}]);