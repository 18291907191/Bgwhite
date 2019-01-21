let db = require('../util/database.query.js')

class Articles {
  // 文章列表
  articleList(params,callback) {
    console.log("调用数据库方法");
    let sql = `select * from articles where title = '${params.searchParams}';`
    db.query(sql,[],(err,result) => {
      if(err) {
        return callback(true);
      }
      callback(false,result);
    })
  }
}
module.exports = Articles;