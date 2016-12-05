/**
 * Created by 叶家洪 on 2016/11/30.
 */
angular.module('patentApp').directive('thirdClassMenu',function () {
    var path = require('path');
    var Sidebar = require(path.join(process.cwd(),'js/models/sidebar'));

    return {
        scope: false,
        link: function (scope,ele,attr) {
            Sidebar.fetchThirdClass(attr.topMenu,attr.parentMenu,function (err,result) {
                scope.$apply(function () {
                    scope.thirdClassMenus = result;
                    console.log(scope.thirdClassMenus);
                })
            })
        }
    }
});