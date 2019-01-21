let express = require('express');
let router = express.Router();

let articles = require('../service/articles');

router.get('/list', (req, res, next) => {
  try {
    let params = req.query;
    articles.article(params,result => res.json(result) )
  } catch (error) {
    res.json({ code: 500, message: '服务器错误！' })
  }
});
module.exports = router;