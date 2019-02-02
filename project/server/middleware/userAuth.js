let jwt = require('jwt-simple');
const jwtSecret = require('../util/database.config').jwtSecret
const needAuth = require('../../util/api.config').needAuth

module.exports = function (req, res, next) {
    let path = req.originalUrl.split('?')[0];
    console.log('7',path);
    console.log('8',needAuth);
    //接口不需要登陆：直接next
    if (needAuth.indexOf(path) == -1) {
      return next();
    }
    
    //接口需要登陆
    var token = req.headers['authorization'];
    if (!token) {
      return res.json({
          code: 401,
          message: 'you need login:there is no token'
      })
    }
    try {
        //解密获取的token
        let decoded = jwt.decode(token, jwtSecret);

        //校验有效期
        if (decoded.exp <= Date.now()) {
            return res.json({
                code: 401,
                message: 'you need login:token is expired'
            });
        }
        next();
    } catch (err) {
        return res.json({
            code: 401,
            message: 'you need login:decode token fail'
        })
    }
};