(function (angular) {
    'use strict';
    //主模块
    var module = angular.module('moviecat', [
        'ngRoute',
        'moviecat.search_list',
        'moviecat.detail_list',
        'moviecat.movie_list',
        'moviecat.directive.auto_focus'
    ]).
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
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
    module.controller('searchController',['$scope','$document',
        function ($scope,$document) {
        $scope.searchStr = '';
            $scope.diableShow =true;
            //搜索框为空的空则不能进行搜索
        $scope.$watch('searchStr',function (newVal) {
            if (newVal.length > 0){
                $scope.diableShow =false;
            }
            if (newVal<=0){
                $scope.diableShow =true;
            }
        });

        $scope.go=function () {
            if($scope.searchStr.length>0){
                $document[0].location.href = '#/search/1/'+ $scope.searchStr;
            }
        };
    }])
})(angular);