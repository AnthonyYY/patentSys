/**
 * Created by 叶家洪 on 2016/11/18.
 */
angular.module('patentApp').directive('nav', function () {
    return {
        scope: true,
        link: function (scope,ele,attr) {
            var menu = ele.parent().parent().next('ul');
            menu.css('max-height','0px');
            ele.bind('click', function () {
                var collapse = menu.css('max-height') == '0px' ? '400px':'0px';
                var rotate = menu.css('max-height') == '0px' ? '0deg':'90deg';
                menu.css('max-height',collapse);
                ele.css('transform','rotate(' + rotate + ')');
            })

        }
    }
});