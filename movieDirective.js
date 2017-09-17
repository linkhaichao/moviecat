(function (angular) {
    var module = angular.module('moviecat.directive.auto_focus',[]);
    module.directive('autoFocus',['$location',function ($location) {
        return {
            restrit:'A',
            link:function ($scope, elem, attr) {
                var path = $location.path();
                var alink = elem.children().attr('href');
                $scope.type = alink.replace(/#(\/.+?)\/\d/,'$1');
                if(path.startsWith($scope.type)){
                    elem.addClass('active');
                }
                elem.on('click',function () {
                    elem.parent().children().removeClass('active');
                    elem.addClass('active');
                })
            }
        }
    }])
})(angular);