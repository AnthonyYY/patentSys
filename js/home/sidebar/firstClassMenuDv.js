/**
 * Created by 叶家洪 on 2016/11/30.
 */
angular.module('patentApp').directive('firstClassMenu',function ($timeout) {
    var path = require('path');
    var Sidebar = require(path.join(process.cwd(),'js/models/sidebar'));

    return function (scope,ele,attr) {
        Sidebar.fetchFirstClass(function (err,result) {
            scope.$apply(function () {
                scope.firstClassMenus = result;
            })
        })
    }

});