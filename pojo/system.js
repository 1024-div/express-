const joi = require('joi')

/**
 * 用户登录
 */
exports.userInfo = {
    body: {
      userName: joi.required(),
      password: joi.required()
    }
  }