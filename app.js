(function (angular) {
    'use strict';
    //主模块
    angular.module('moviecat', [
        'ngRoute',
        'moviecat.movie_list',
        'moviecat.directive.auto_focus'
    ]).
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/in_theaters'});
    }]);
       /* .controller('NavController',['$scope','$location',function ($scope, $location) {
            $scope.$location = $location;
            $scope.type = '';
            $scope.$watch('$location.path()',function (newVal) {
                if(newVal.startsWith('/in_theaters')){
                    $scope.type = 'in_theaters';
                }else if(newVal.startsWith('/coming_soon')){
                    $scope.type = 'coming_soon';
                }else{
                    $scope.type = 'top250';
                }
            })
        }]);*/
})(angular);