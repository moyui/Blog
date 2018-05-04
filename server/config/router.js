'use strict'

const Router = require('koa-router');

const ArticleItems = require('../controller/articleitems.js');
const ArticleInfo = require('../controller/articleinfo.js');

module.exports = function() {
  const router = new Router();

  router.get('/v1/articleitems', ArticleItems.getArticleItems);
  router.get('/v1/article/:id', ArticleInfo.getArticeInfoById);
  router.post('/v1/article/:id/readtimes' , ArticleInfo.postArticleReadTimesById);
  router.post('/v1/article', ArticleInfo.postCreateNewArticle);
  router.delete('/v1/article/:id', ArticleInfo.deleteArticleById);
  
  return router;
}