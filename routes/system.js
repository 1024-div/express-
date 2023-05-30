var express = require('express');
var router = express.Router();
var {secretKey} = require('../config/token.config');
const jwt=require('jsonwebtoken')
// 1、合法性校验
const expressJoi = require('../util/express-joi')

const {systemService} = require('../service/systemService')

const {
  userInfo
} = require('../pojo/system')

/**
 * 用户登录，返回token
 */
router.get('/login',expressJoi(userInfo), function(req, res, next) {
  systemService.login(req, res);
});



module.exports = router;
