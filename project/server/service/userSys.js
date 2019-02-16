let jwt = require('jwt-simple')
let moment = require('moment')
let jwtSecret = require('../util/database.config').jwtSecret

const User = require('../models/user');

let userModel = new User();

let auth = (user, callback) => {
  if (user.account.trim() == '' || user.password.trim() == '') {
    return callback({
      code: 201,
      message: '用户名或密码不能为空'
    });
  }
  userModel.auth(user, (err, user) => {
    if (err) {
      return callback({
        code: 201,
        message: '登录失败!'
      });
    }
    if(user.length == 0) {
      return callback({
        code: 201,
        message: '账号或密码有误，请重新输入！'
      })
    }
    //设置七天有效期
    let expires = moment().add(7, 'days').valueOf();
    console.log('31',expires);
    let token = jwt.encode({
      uid: user.userId,
      exp: expires
    }, jwtSecret)
    console.log('36',token);
    return callback({
      code: 200,
      message: 'success',
      result: {token:token}
    });
  });
}

module.exports.auth = auth;
