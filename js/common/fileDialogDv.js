/**
 * Created by 叶家洪 on 2016/11/26.
 */
angular.module('patentApp').directive('openFileDialog',function () {
   return function (scope,ele,attr) {
       ele.bind('click', function () {
           document.getElementById(attr.openFileDialog).click();
       })
   }
});