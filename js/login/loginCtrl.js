/**
 * Created by 叶家洪 on 2016/11/16.
 */
angular.module('patentApp').controller('loginCtrl', function ($scope,$state,userPoolSv,passwordSv,notify,$rootScope,excel) {

    $scope.user = userPoolSv.defaultUser;
    $scope.login = function (username,password) {
        if(passwordSv.crypt(username) == password){
            localStorage.currentUser = username;
            $rootScope.currentUserName = username;
            notify.notify('登陆成功!');
            $state.go('home');
        } else {
            notify.notify('登陆失败','用户名或密码不正确');
        }
    };

    excel.initExcelModel();
});