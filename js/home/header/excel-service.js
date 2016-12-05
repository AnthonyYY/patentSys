/**
 * Created by 叶家洪 on 2016/11/26.
 */
angular.module('patentApp').service('excel',function (notify,$rootScope) {
    var fs = require('fs');
    var path = require('path');
    var excel = require('node-xlsx').default;
    var Patent = require(path.join(process.cwd(),'js/models/patent'));
    var Sidebar = require(path.join(process.cwd(),'js/models/sidebar'));
    var $this = this;

    this.initExcelModel = function () {

        var data =  excel.parse(process.cwd() + '/excels/patent-model.xlsx');
        var patentJsonModel = {};
        data[0]['data'][1].forEach(function (item,idx) {
            patentJsonModel[item] = data[0]['data'][0][idx];
        });
        fs.writeFile(process.cwd() + '/excels/patentModel.json',JSON.stringify(patentJsonModel));
    };

    this.test = function () {
        // Patent.remove({},{multi: true});
/*
        Sidebar.update({$set: {menus:{
            firstClass:[],
            secondClass:[],
            thirdClass:[]
        }}},{multi: false},function (result) {

        });
*/
    };

    this.readExcel = function (file,callback) {

        // get excel data
        var excelContent = excel.parse(file);
        var patents = excelContent[0]['data'].slice(2);

        // save excel data doc by doc
        var start = 0;
        for(var i=0;i<patents.length;i++){
            var patent = new Patent();
            for(var j = 0; j < patents[i].length;j++ ){
                patent[Object.keys(patent)[j]] = patents[i][j];
            }
            patent.save(function (err,result) {
                start++;
                if(start == patents.length){
                    $rootScope.$broadcast('excel.import.finished');
                    callback();
                }
                if(err) {
                    return console.error(err);
                }
            })
        }
    };

});