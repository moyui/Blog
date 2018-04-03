'use strict'

const mongoose = require('mongoose');
const Article = mongoose.model('Article');

/**
 * 通过id获取文章详细信息
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getArticeInfoById = async(ctx, next) => {
  const id = ctx.params.id;
  let articleInfoById, //查询到当前，上一条与下一条文章
      prevArticleInfo,
      nextArticleInfo; 
  try {
    if (!id) {
      throw new Error('文章编号错误');
    }

    [articleInfoById, prevArticleInfo, nextArticleInfo] = //进行数据库查询
      await Promise.all([
        Article.findById(id),
        Article.findOne({'_id': {'$lt': id}}),
        Article.findOne({'_id': {'$gt': id}})
      ]);
  } catch(err) {
    console.log(err);

    ctx.status = 404;
    ctx.set('Content-Type', 'application/json');
    ctx.body = JSON.stringify({status: 'failure'});//查询失败
    return next;
  }

  const returnData = { //返回值集合
    id: articleInfoById._id,
    title: articleInfoById.title,
    archive: articleInfoById.archive,
    page: articleInfoById.page,
    commets: articleInfoById.commets,
    previousPageId: (prevArticleInfo) ? prevArticleInfo._id : null,
    previousPageTitle: (prevArticleInfo) ? prevArticleInfo.title: null,
    nextPageId: (nextArticleInfo) ? nextArticleInfo._id : null,
    nextPageTitle: (nextArticleInfo) ? nextArticleInfo.title: null,
  };

  ctx.status = 200;
  ctx.set('Content-Type', 'application/json');
  ctx.body =  JSON.stringify({ //查询成功并返回数据
    status: 'success',
    data: returnData
  });
  return next;
}

/**
 * 添加新文章
 * @param  {[type]}   ctx  [description]
 * @param  {function} next [description]
 * @return {[type]}        [description]
 */
exports.createNew = async(ctx, next) => {
  const body = ctx.request.body;
  const title = body.title;
  const abstract = body.abstract;
  const archive = body.archive;
  const page = body.page;

  let articleInfo = new Article({
    title: title,
    archive: archive,
    abstract: abstract,
    page: page
  });

  try {
    await articleInfo.save();
  } catch(err) {
    console.log("创建错误", err);
    return next;
  }
}