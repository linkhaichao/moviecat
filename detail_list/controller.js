(function (angular) {
    'use strict';
    //top250模块
    var moduel = angular.module('moviecat.detail_list', ['ngRoute','moviecat.service.http']);

    moduel.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/subject/:page', {
            templateUrl: 'detail_list/view.html',
            controller: 'DetailListController'
        });
    }]);

    moduel.controller('DetailListController', ['$scope','$http','$route','$routeParams','$location','HttpService',
        function ($scope,$http,$route,$routeParams,$location,HttpService) {
        //http://localhost:63342/app/index.html?q=ssss#/in_theaters/1?q
        //     console.log($location.absUrl());
        //    var str = $location.absUrl();
        //    $scope.queryStr = str.replace(/(.+?)\?(q=.+?)#\/.+?\/\d+/,'$2');
        //    var newStr = '';
        //    if($scope.queryStr.startsWith('q=')){
        //        var arr = $scope.queryStr.split('=');
        //        newStr = arr[1];
        //    }
        //    console.log($scope.queryStr);
            var page = parseInt($routeParams.page); //页码
            var count = 7; //每页显示的条目
            var start = (page-1)*count; //起始的页数
            $scope.subjects = {};
            $scope.summary = '';
            $scope.title = "";
            $scope.showBool = true;
            $scope.alt = '';
            // if (newStr.length>0){
                HttpService.jsonp('https://api.douban.com/v2/movie/subject/'+page,{},function (data) {
                    console.log(data);
                    $scope.subjects = data;
                    $scope.summary = data.summary;
                    $scope.title = data.title;
                    $scope.alt = data.alt;
                    $scope.showBool = false;
                    $scope.$apply();  //同步所有的数据
                });
            // }


    }]);
})(angular);


