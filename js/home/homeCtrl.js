/**
 * Created by 叶家洪 on 2016/11/16.
 */
angular.module('patentApp').controller('homeCtrl', function ($scope,excel,notify,patent,$timeout) {

    angular.element(document.querySelector('body')).css('overflow-y','scroll');

    patent.getNewestPatent(function (res) {
        $scope.newestPatents = res;
    });

    patent.getPopularPatent(function (res) {
        $scope.popularPatents = res;
    });

    $scope.showUserSetting = false;
    $scope.showSearchFilter = false;
    $scope.searchKey = '';

    $scope.navTitle = {
        classOne:'',
        classTwo:'',
        classThree:'',
        classFour:''
    };

    $scope.readExcel = function (file) {
        excel.readExcel(file,function () {
            notify.notify('excel导入完毕!');
        });
    };

    patent.query.params = {};
    $scope.getPatents = function(curPage){

        patent.getPatents(curPage,function (count,patents) {

            $timeout(function () {
                $scope.count = count;
                $scope.patents = patents;

                $scope.currentPatent = $scope.patents[0];
            });
        })
    };

    $scope.getPatents(1);

    $scope.setCurrentPatent = function (idx,classFour,patent) {
        if(arguments.length == 3){
            $scope.currentPatent = patent;
            $scope.navTitle.classOne = classFour;
        }else{
            $scope.currentPatent = $scope.patents[idx];
            $scope.navTitle.classFour = classFour;
        }
    }

});