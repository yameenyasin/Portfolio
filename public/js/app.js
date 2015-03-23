/*

    Copyright www.yameen.info
    Author: Yameen Yasin
    
*/

var Portfolio = angular.module('Portfolio',['ngRoute']);

//Configure Routes
Portfolio.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        
        templateUrl:'partials/home.html',
        controller:'homeController'
    })
    
    .when('/about',{
        templateUrl:'partials/about.html',
        controller:'aboutController'
    })
    .when('/contact',{
        templateUrl:'partials/contact.html',
        controller:'contactController'
    })
    .otherwise({redirectTo:'/home'});
});
Portfolio.controller('MasterController',['$scope',function($scope){
    
    //Create Partial Paths
    $scope.headerUrl = '/partials/header.html';
    
}]);
Portfolio.controller('homeController',['$scope',function($scope){
    $scope.profilePic = 'images/yameen.jpg';
}]);
Portfolio.controller('aboutController',['$scope',function($scope){
    
}]);
Portfolio.controller('contactController',['$scope',function($scope){
    
}]);
                                        
