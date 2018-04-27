'use strict';

angular.module('myApp.newsfinder', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/newsfinder', {
    templateUrl: 'newsfinder/newsfinder.html',
    controller: 'newsfinderCtrl'
  });
}])

.controller('newsfinderCtrl', ['$scope','$http',function($scope,$http) {

    $scope.next  = '/filterWebContent?token=d90435dc-535d-4a5a-995d-3dc9c2150960&format=json&ts=1521470830510&sort=crawled&q=thread.country%3AID%20site_category%3Acelebrity_fan_gossip';
    
  $scope.GetNews = function () {
    $http.get("http://webhose.io"+$scope.next).then(function (response) {

      console.log(response.data);
      $scope.output = response.data
     // 
   })
    
  }
  $scope.GetNews();

 

  $scope.SaveData = function(){//set pause and start
      
    
        var data = $.param({
          content:  $scope.output.posts
         });
     
         var config = {
             headers : {
                 'Content-Type': 'application/x-www-form-urlencoded'
             }
         }
//http://localhost:3000/news
         $http.post(location.origin+'/news', data, config).then(function (response) {
           console.log("saved");
          console.log(response.data);
         })
         .catch(function(res) {
            console.log(res);
         });

     
   
    //  $scope.next = $scope.output.next
    //  console.log($scope.output.posts );

    
   }

}]);