/**
 * Created by 叶家洪 on 2016/12/5.
 */
angular.module('patentApp').directive('patentSearchBar',function (patent,$timeout,$state) {
    return function (scope,ele,attr) {

        ele.bind('keyup',function (e) {

            var reg = new RegExp(scope.searchKey.replace(' ',''));
            if(e.keyCode == 13){
                patent.query.params = {
                    titleTranslated: {
                        $regex: reg
                    }
                };
                $timeout(function () {
                    $state.go('home.search-result');
                    scope.navTitle = {};
                    scope.navTitle.classOne = scope.searchKey.replace(' ','');
                    scope.getPatents(1);
                });
            }
        })
    }
});