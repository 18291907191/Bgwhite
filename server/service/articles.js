const Articles = require('../models/articles');
const Tags = require('../models/articles_tags');
let async = require('async');

let articlesModel = new Articles();
let tags = new Tags();

/**
 * @description 文章列表 (标题)
 * @param {*} title
 * @param {*} callback 
 */
let article = (params,callback) => {
  articlesModel.articleList(params,(err,result) => {
    if(err) {
      return callback({
        code: 405,
        message: err,
      })
    }
    async.eachSeries(result,(post,tagCallback) => {
      tags.articlesTags({articleId:post.id},(err,data) => {
        if(err) {
          return tagCallback(err);
        }
        post.tags = data;
        tagCallback();
      })
    }, err => {
      if(err) {
        return callback({code: 200,message: 'no result'});
      }
      callback({code: 200,message:'success', result: result});
    })
  })
}

/**
 * @description 文章列表（标签）
 * @param {*} tagName 
 * @param {*} callback 
 */
let articleListByTagName = (tagName,callback) => {
  articlesModel.articleListByTagName(tagName,(err,result) => {
    if(err) {
      return callback(err);
    }
    async.eachSeries(result,(post,tagCallback) => {
      tags.articlesTags({articleId:post.id},(err,data) => {
        if(err) {
          return tagCallback(err);
        }
        post.tags = data;
        tagCallback();
      })
    }, err => {
      if(err) {
        return callback({code: 200, message: 'no result'});
      }
      return callback({code: 200, message: 'success',result: result});
    })
  })
}

/**
 * @description 文章详情
 * @param {*} 文章Id 
 * @param {*} callback 
 */
let articleDetail = (params,callback) => {
    async.waterfall([
      oneCallback => {
        articlesModel.articleDetail({id:params},(err,post) => {
          if(err) {
            return oneCallback(err);
          }
          if(post.length == 0) {
            return oneCallback('not fount this post');
          }
          oneCallback(null,post);
        })
      },
      (arg1,tagCallback) => {
        tags.articlesTags({articleId: params},(err,tags) => {
          if(err) {
            return tagCallback(err);
          }
          arg1[0].tags = tags;
          tagCallback(null,arg1);
        })
      }
    ], (err,newPost) => {
      if(err) {
        return callback({code: 200,message: 'no result'});
      }
      callback({code: 200,message: 'success', result: newPost[0]});
    });
}

/**
 * @description 添加文章
 * @param {Object} params 参数
 * @param {Function} callback 
 */
let addArticle = (params,callback) => {
  articlesModel.addArticle(params,(err) => {
    if(err) {
      return callback({
        code: 405,
        message: err,
      })
    }
    return callback({
      code: 200,
      message: 'success',
      result: null
    })
  })
}

/**
 * @description 查询所有标签
 * @param {Function} callback 
 */
let articleTags = (callback) => {
  tags.articlesTags({articleId:''},(err,data) => {
    if(err) {
      return callback({
        code: 405,
        message: err
      })
    }
    return callback({
      code: 200,
      message: 'success',
      result: data
    })
  })
}

let deleteArticle = (params,callback) => {
  articlesModel.deleteArticle(params,(err) => {
    if(err) {
      return callback({
        code: 405,
        message: err
      })
    }
    return callback({
      code: 200,
      message: 'success',
      result: null
    })
  }) 
}

module.exports.article = article;
module.exports.articleDetail = articleDetail;
module.exports.articleListByTagName = articleListByTagName
module.exports.addArticle = addArticle
module.exports.articleTags = articleTags
module.exports.deleteArticle = deleteArticle