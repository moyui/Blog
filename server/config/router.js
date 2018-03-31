'use strict'

const Router = require('koa-router');

const ArticleItems = require('../controller/articleitems.js');
const ArticleInfo = require('../controller/articleinfo.js');

module.exports = function() {
  const router = new Router();

  router.get('/articleitems', ArticleItems.getArticleItems);
  router.get('/articleinfo', ArticleInfo.getArticeInfo);
  router.post('/articleinfo', ArticleInfo.createNew);
  
  return router;
}