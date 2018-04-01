'use strict'

const mongoose = require('mongoose');
const Article = mongoose.model('Article');

/**
 * 获取文章详细信息
 * @param  {[type]}   ctx  [description]
 * @param  {function} next [description]
 * @return {[type]}        [description]
 */
exports.getArticeInfo = async(ctx, next) => {
  const id = parseInt(ctx.params.id);
  try {
    if (!Number.isSafeInteger(id)) {
      throw new Error('数据错误');
    }

    const articleInfo = await Article.where({id: id}).findOne().lean();//进行数据库查询

  } catch(err) {
    console.log(err);
    ctx.body = JSON.stringify({status: 'failure'});//查询失败
    return next;
  }

  console.log(articleInfo);

  const returnData = {
    id: articleInfo._id,
    title: articleInfo.title,
    archive: articleInfo.archive,
    page: articleInfo.page,
    commets: articleInfo.commets
  };

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