/**
 * Created by 叶家洪 on 2016/11/27.
 */

var path = require('path');
var DB = require(path.join(process.cwd(), 'js/models/db.js'));

var patentModel = new DB('patent',{
    "publicId": {type: String,unique: true,index: true},
    "publicDate": Date,
    "publicYear": Date,
    "applicationId": String,
    "applicationDate": String,
    "applicationYear": Date,
    "priorityNum": Number,
    "priorityDate": Date,
    "priorityCountry": String,
    "priorityYear": Date,
    "title": String,
    "titleModified": String,
    "titleTranslated": String,
    "summary": String,
    "summaryModified": String,
    "summaryTranslated": String,
    "firstRight": String,
    "right": String,
    "rightCount": Number,
    "proposer": String,
    "proposerModified": String,
    "applicationCountry": String,
    "proposerAddress": String,
    "inventor": String,
    "investigator": String,
    "agent": String,
    "agency": String,
    "lawyerStatus": String,
    "curLawyerStatus": String,
    "type": String,
    "IPCMainType": String,
    "IPCsubType": String,
    "IPCtype": String,
    "CPCtype": String,
    "economyType": String,
    "simpleFamily": String,
    "simpleFamilyCount": String,
    "familyCountry": String,
    "citePatent": String,
    "citedPatent": String,
    "comparePatent": String,
    "likePatent": String,
    "familyCitePatent": String,
    "familyCitedPatent": String,
    "citedCount": Number,
    "familyCitedCount": Number,
    "assignor": String,
    "assignee": String,
    "assignDate": Date,
    "licensee": Date,
    "licensedDate": Date,
    "usage": String,
    "advantage": String,
    "creativePart": String,
    "licensor": String,
    "value": String,
    "gradeOne": String,
    "gradeTwo": String,
    "gradeThree": String,
    "tag": String,
    "project": String,
    "USAinvest": String,
    "createdTime": {type: Date,default: Date.now()}
},{ });

patentModel.ensureIndex({fieldName: 'publicId',unique: true});

patentModel.static('fetchPatentByPage',function (query,page,itemsPerPage,cb) {
    return patentModel.find(query).skip((page-1)*itemsPerPage).limit(itemsPerPage).exec(cb);
});

patentModel.static('fetchPatentNewest',function (cb) {
   return patentModel.find({}).sort({createdTime:-1}).limit(3).exec(cb);
});

patentModel.static('fetchPatentCore',function (cb) {
    return patentModel.find({}).sort({citedCount:-1}).limit(3).exec(cb);
});

module.exports = patentModel;