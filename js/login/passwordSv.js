/**
 * Created by 叶家洪 on 2016/11/22.
 */
angular.module('patentApp').service('passwordSv',function (userPoolSv) {

    const md5 = require('md5');

    this.crypt = function (msg) {
        var hash = md5(msg).slice(0,16);
        for(var i=0;i<hash.length;i++){
            if(i%3 == 0){
                hash = hash.replace(hash[i],hash[i].toUpperCase())
            }
        }
        return hash;
    }
});