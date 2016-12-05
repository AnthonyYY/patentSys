/**
 * Created by 叶家洪 on 2016/11/30.
 */

angular.module('patentApp').directive('getPatentByClassThree', function (patent,$state,$timeout) {

    return function (scope,ele,attr) {

        ele.bind('click', function (e) {

            $state.go('home.search-result');

            patent.query.params = {
                gradeOne:attr.topMenu,
                gradeTwo:attr.parentMenu,
                gradeThree:attr.childMenu
            };

            $timeout(function () {

                scope.navTitle.classOne = attr.topMenu;
                scope.navTitle.classTwo = attr.parentMenu;
                scope.navTitle.classThree = attr.childMenu;
                scope.navTitle.classFour = '';

                scope.curPage = 1;
                scope.getPatents();
            });

        });
    };
});

angular.module('patentApp').directive('getPatentByClassTwo', function (patent,$state,$timeout) {

    return function (scope,ele,attr) {

        ele.bind('click', function (e) {

            $state.go('home.search-result');
            e.stopPropagation();

            patent.query.params = {
                gradeOne:attr.topMenu,
                gradeTwo:attr.parentMenu
            };

            $timeout(function () {

                scope.navTitle.classOne = attr.topMenu;
                scope.navTitle.classTwo = attr.parentMenu;
                scope.navTitle.classThree = '';
                scope.navTitle.classFour = '';

                scope.curPage = 1;
                scope.getPatents();
            });

        });
    };
});

angular.module('patentApp').directive('getPatentByClassOne', function (patent,$state,$timeout) {

    return function (scope,ele,attr) {

        ele.bind('click', function (e) {

            $state.go('home.search-result');

            patent.query.params = {
                gradeOne:attr.topMenu
            };

            $timeout(function () {

                scope.navTitle.classOne = attr.topMenu;
                scope.navTitle.classTwo = '';
                scope.navTitle.classThree = '';
                scope.navTitle.classFour = '';

                scope.curPage = 1;
                scope.getPatents();
            });

        });
    };
});