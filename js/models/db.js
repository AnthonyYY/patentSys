/**
 * Created by 叶家洪 on 2016/11/27.
 */
var LinvoDB = require('linvodb3');
LinvoDB.defaults.store = {db: require('level-js')};
LinvoDB.dataPath = process.cwd();

module.exports = LinvoDB;