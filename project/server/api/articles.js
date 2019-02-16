let express = require('express');
let router = express.Router();

let articles = require('../service/articles');

// 文章列表（标题/all）
router.get('/list', (req, res, next) => {
  try {
    if(req.query.tag !== '') {
      articles.articleListByTagName(req.query.tag,result => res.json(result));
      return ;
    }
    articles.article(req.query.title,result => res.json(result));
  } catch (error) {
    res.json({ code: 500, message: '服务器错误！' });
  }
});

// 文章列表（标签）
router.get('/detail/:article_id',(req,res,next) => {
  try {
    articles.articleDetail(req.params.article_id,result => res.json(result)); 
  } catch(err) {
    res.json({ code: 500, message: '服务器错误!' });
  }
})

// 添加文章
router.post('/addArticle', (req,res,next) => {
  try {
    articles.addArticle(req.body,result => res.json(result));
  } catch(err) {
    res.json({ code:500, message: '服务器错误!'});
  }
})

//查询所有标签
router.get('/articleTags',(req,res,next) => {
  try {
    articles.articleTags(result => res.json(result));
  } catch(err) {
    res.json({ code: 500, message: '服务器错误！'})
  }
})

// 根据id删除文章
router.post('/deleteArticle',(req,res,next) => {
  try {
    articles.deleteArticle(req.body,result => res.json(result));
  } catch(err) {
    res.json({ code: 500, message: '服务器错误！'})
  }
})

module.exports = router;