
const {systemMapper} = require('../mapper/systemMapper');

exports.systemService = {
    login: function(req, res){
        let userInfo = req.body;
        return systemMapper.login(userInfo,(result,fields)=>{
            if(result == undefined || result == null){
                res.json({
                    code: '',
                    msg: '错误'
                })
            }
            else{
                if(result.length == 0){
                    res.json({
                        code: '',
                        msg: '错误'
                    })
                }
                res.json(result)
            }
        });
    }
}