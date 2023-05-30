var db = require('../config/db');

exports.systemMapper = {

    login: function(userInfo, callback){
        db.query("select * from sys_user where user_name=? and nick_name=?",[userInfo.userName,userInfo.password],callback)
    }

}