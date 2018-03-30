'use strict'

const Router = require('koa-router');

const ArticleItems = require('../controller/articleitems.js');

module.exports = function() {
  const router = new Router();

  router.get('/articleitems', ArticleItems.getArticleItems);
  router.get('/articleinfo/:id', async (ctx, next) => {

  });
  router.get('/articleinfo',)

  return router;
}