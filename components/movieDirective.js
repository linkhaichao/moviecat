(function (angular) {
    var module = angular.module('moviecat.directive.auto_focus',[]);
    module.directive('autoFocus',['$location',function ($location) {
        return {
            restrit:'A',
            link:function ($scope, elem, attr) {
                $scope.$location = $location;
                $scope.$watch('$location.path()',function (newVal) {
                    var path = newVal;
                    var alink = elem.children().attr('href');
                    $scope.type = alink.replace(/#(\/.+?)\/\d/,'$1');
                    console.log($scope.type);
                    console.log(path);
                    if(path.startsWith($scope.type)){
                        console.log(11);
                        elem.addClass('active');
                    }
                });

                elem.on('click',function () {
                    elem.parent().children().removeClass('active');
                    elem.addClass('active');
                })
            }
        }
    }])
})(angular);