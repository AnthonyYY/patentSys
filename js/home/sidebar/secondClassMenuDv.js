/**
 * Created by 叶家洪 on 2016/11/30.
 */
angular.module('patentApp').directive('secondClassMenu',function () {
    var path = require('path');
    var Sidebar = require(path.join(process.cwd(),'js/models/sidebar'));

    return {
        scope: false,
        link: function (scope,ele,attr) {
            Sidebar.fetchSecondClass(attr.parentMenu,function (err,result) {
                scope.$apply(function () {
                    scope.secondClassMenus = result;
                    console.log(scope.secondClassMenus);
                })
            })
        }
    }
});