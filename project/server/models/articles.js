let db = require('../util/database.query.js')

class Articles {
  // 文章列表
  articleList(params,callback) {
    let sqlTitle = `select * from articles where title like '%${params.search}%';`;
    let sqlAll = `select * from articles;`
    let sqlType = `select * from articles where type = '${params.type}';`;
    let sql = '';
    if(params.search == null) {
      if(params.type == null) {
          sql = sqlAll;
      } else {
        sql = sqlType;
        }
    } else {
      sql = sqlTitle;
    }
    db.query(sql,[],(err,result) => {
      if(err) {
        return callback(true);
      }
      callback(false,result);
    })
  }
}
module.exports = Articles;