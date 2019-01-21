let crypto = require('crypto')

let db = require('../util/database.query.js')

class User {
  //验证用户名密码
  auth(user, callback) {
    let sql = `select id from users where username = '${user.account}' and password = '${user.password}'`;
    //加密密码
    user.password = crypto.createHash('sha1').update(user.password).digest('hex');
    db.query(sql, [], (err, result) => {
      if (err) {
        return callback(true);
      }
        callback(false, result);
    });
  }
}

module.exports = User;