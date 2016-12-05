/**
 * Created by 叶家洪 on 2016/11/22.
 */
angular.module('patentApp').service('notify', function () {
    this.notify = function (title,content) {
        var notify = new Notification(title,{
            body: content,
            icon: '../../img/logo.png',
            sound: '../../audio/popup.mp3'
        });

        notify.onshow = function () {
            setTimeout(function () {
                notify.close();
            },2000);
        };
    }
});