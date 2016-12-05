/**
 * Created by 叶家洪 on 2016/11/29.
 */
var path = require('path');
var DB = require(path.join(process.cwd(), 'js/models/db.js'));
var Patent = require(path.join(process.cwd(), 'js/models/patent.js'));

var SidebarMenu = new DB('SidebarMenu',{
   menus: {
       firstClass: [String],
       secondClass: [String],
       thirdClass: [String]
   }
},{});

SidebarMenu.static('fetchFirstClass', function (cb) {

    var arr = [];

    return Patent.find({}).filter(function (p) {
        if(p.gradeOne && arr.indexOf(p.gradeOne) < 0){
            arr.push(p.gradeOne);
            return true;
        }
    }).map(function (x) {
        return x.gradeOne;
    }).exec(cb);
});

SidebarMenu.static('fetchSecondClass', function (firstLevelItem,cb) {

    var arr = [];

    return Patent.find({gradeOne: firstLevelItem}).filter(function (p) {
        if(p.gradeTwo && arr.indexOf(p.gradeTwo) < 0){
            arr.push(p.gradeTwo);
            return true;
        }
    }).map(function (x) {
        return x.gradeTwo;
    }).exec(cb);

});

SidebarMenu.static('fetchThirdClass', function (firstLevelItem,secondLevelItem,cb) {

    var arr = [];

    return Patent.find({gradeOne: firstLevelItem,gradeTwo: secondLevelItem}).filter(function (p) {
        if(p.gradeThree && arr.indexOf(p.gradeThree) < 0){
            arr.push(p.gradeThree);
            return true;
        }
    }).map(function (x) {
        return x.gradeThree;
    }).exec(cb);

});

module.exports = SidebarMenu;