const Articles = require('../models/articles');
let articlesModel = new Articles();

let article = (params,callback) => {
  articlesModel.articleList(params,(err,result) => {
    if(err) {
      return callback({
        code: 405,
        message: err,
      })
    }
    return callback({
      code: 200,
      message: 'success',
      result: result
    })
  })
}
module.exports.article = article;