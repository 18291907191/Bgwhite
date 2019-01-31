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
    res.json({ code: 500, message: '服务器错误！' })
  }
});

// 文章列表（标签）
router.get('/detail/:article_id',(req,res,next) => {
  try{
    articles.articleDetail(req.params.article_id,result => res.json(result)); 
  } catch(err) {
    res.json({ code: 500, message: '服务器错误!' })
  }
})

module.exports = router;