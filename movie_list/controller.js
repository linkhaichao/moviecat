(function (angular) {
    'use strict';
    //top250模块
    var moduel = angular.module('moviecat.movie_list', ['ngRoute','moviecat.service.http']);

    moduel.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:category/:page', {
            templateUrl: 'movie_list/view.html',
            controller: 'MovieListController'
        });
    }]);

    moduel.controller('MovieListController', ['$scope','$http','$route','$routeParams','HttpService',
        function ($scope,$http,$route,$routeParams,HttpService) {
            var page = parseInt($routeParams.page); //页码
            var count = 7; //每页显示的条目
            var start = (page-1)*count; //起始的页数
            $scope.subjects = [];
            $scope.message = '';
            $scope.currentPage = page;
            $scope.totalCount = 0; //总共的条目数
            $scope.totalPages = 0; //总共的页数
            $scope.title = "";

            HttpService.jsonp('https://api.douban.com/v2/movie/'+($routeParams.category),{start:start,count:count},function (data) {
                console.log(data);
                $scope.subjects = data.subjects;
                $scope.title = data.title;
                $scope.totalCount = data.total;
                $scope.totalPages = Math.ceil($scope.totalCount/count); //总共的页数
                $scope.$apply();  //同步所有的数据
            });
            //分页管理  双重校验
            $scope.go = function (page) {
                if(page>=1 && page<=$scope.totalPages){
                    $route.updateParams({page:page});
                }
            }
    }]);
})(angular);


