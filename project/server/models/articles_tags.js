let db = require('../util/database.query.js')

class ArticlesTags {
  /**
   * @description 查询所有标签
   * @param {*} params  标签Id
   * @param {*} callback 结果回调
   */
  articlesTags(params,callback) {
    let sqlArticlesTags = 'select * from articles_tags where 1=1';
    if(params.articleId !== '') {
      let tags = ` and article_id = '${params.articleId}'`;
      sqlArticlesTags += tags;
    }
    let sql = sqlArticlesTags + ';';
    db.query(sql,[],(err,result) => {
      if(err) {
        return callback(true);
      }
      return callback(false,result);
    })
  }
}
module.exports = ArticlesTags;