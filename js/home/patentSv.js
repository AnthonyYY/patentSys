/**
 * Created by 叶家洪 on 2016/12/4.
 */
angular.module('patentApp').service('patent',function () {
    var path = require('path');
    var Patent = require(path.join(process.cwd(),'js/models/patent.js'));

    var $this = this;
    this.query = {
        itemsPerPage: 10,
        params: {}
    };
    this.getPatents = function (page,callback) {
        Patent.count($this.query.params,function (err,count) {
            if(err) return console.error(err);
            Patent.fetchPatentByPage($this.query.params,page,$this.query.itemsPerPage,function (err,patents) {
                if(err) return console.error(err);
                callback(count,patents);
            })
        });
    };

    this.getNewestPatent = function (callback) {
        Patent.fetchPatentNewest(function (err,res) {
            if(err) return console.error(err);
            console.log(res);
            callback(res);
        })
    };

    this.getPopularPatent = function (callback) {
        Patent.fetchPatentCore(function (err,res) {
            if(err) return console.error(err);
            console.log(res);
            callback(res);
        })
    };

    this.test = function(){
        Patent.remove({},{multi: true})
    }
});