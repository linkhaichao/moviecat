(function (angular) {
    'use strict';
    //主模块
    var module = angular.module('moviecat.service.http', []);
    module.service('HttpService',['$document','$window',function ($document,$window) {
       this.jsonp = function (url, data, callback) {
           var funcName = "abc_hk_kj"+Math.random().toString().replace('.',"");
           $window[funcName] = callback;
           var queryString = url.indexOf("?")==-1?"?":"";
           for(var key in data){
               queryString += key + "=" + data[key] + "&";
           }
           queryString += "callback="+funcName;
           url += queryString;
           var scriptDom = $document[0].createElement('script');
           scriptDom.src = url;
           $document[0].getElementsByTagName('body')[0].appendChild(scriptDom);
       }
    }])
})(angular);