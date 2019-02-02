let db = require('../util/database.query.js')

class Articles {
  /**
   * @description 文章名称查询文章列表
   * @param {String} title 文章标题
   * @param {*} callback 
   */
  articleList(title,callback) {
    let sqlTitle = `select * from articles where 1=1 `;
    if(title !== '') {
      let searchTitle = ` and title like '%${title}%'`;
      sqlTitle += searchTitle;
    }
    let sql = sqlTitle + ';';
    db.query(sql,[],(err,result) => {
      if(err) {
        return callback(true);
      }
      callback(false,result);
    })
  };
  /**
   * @description 标签查询文章列表
   * @param {String} 标签名称
   * @param {Function} callback
   */
  articleListByTagName(tagName,callback) {
    let sqlTags = `select second.* from 
      articles_tags first 
      LEFT JOIN articles second
      on second.id = first.article_id
      where tag = '${tagName}'`
     let sql = sqlTags + ';';
     db.query(sql,[],(err,result) => {
       if(err) {
         return callback(true);
       }
       return callback(false,result);
     })
  };
  /**
   * @description 文章id查询文章详情
   * @param {String} params 文章Id
   * @param {Function} callback 
   */
  articleDetail(params,callback) {
    let sqlDetail = `select * from articles where id = ${params.id}`;
    let sql = sqlDetail + ';';
    db.query(sql,[],(err,result) => {
      if(err) {
        return callback(true);
      }
      callback(false,result);
    })
  }
  /**
   * @description 添加文章
   * @param {*} params 
   * @param {*} callback 
   */
  addArticle(params,callback) {
    // params.content.replace(/\'/g,'\'\'');
    let sqlAddArticle = `insert into articles(title,title_img,content,status,abstract) values(?,?,?,?,?)`;
    let sql = sqlAddArticle + ';';
    let post = [
      params.title,
      params.title_img,
      params.content,
      params.status,
      params.abstract
    ];
    console.log(post);
    db.query(sql,post,(err,result) => {
      if(err) {
        return callback(true);
      }
      callback(false,result);
    })
  }
}
module.exports = Articles;