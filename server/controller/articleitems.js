'use strict'

const mongoose = require('mongoose');
const Article = mongoose.model('Article');

/**
 * 获取文章列表信息
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getArticleItems = async(ctx, next) => {
  const page = parseInt(ctx.query.page);//当前页面指向并进行过滤
  const limit = parseInt(ctx.query.limit); //默认按照一页显示15个来
  let articleItems;
  try {
    if (!Number.isSafeInteger(limit)) {
      throw new Error('数量错误');
    }

    articleItems = await Article 
                          .find({}, {'page': 0, 'commets': 0})
                          .sort({field: 'desc'})
                          .skip((page-1)*limit)
                          .limit(limit)
                          .lean();//进行数据库查询,除去commets,page项

  } catch(err) {
    console.log(err);
    ctx.status = 404;
    ctx.set('Content-Type', 'application/json');
    ctx.body = JSON.stringify({status: 'failure'});//查询失败
    return next;
  }
  const returnData = Object.keys(articleItems).map((item) => {
    const articleItem = articleItems[item];

    return {
      id: articleItem._id,
      title: articleItem.title,
      archive: articleItem.archive,
      abstract: articleItem.abstract,
      date: new Date(articleItem.meta.createAt).toDateString(),
      readTimes: articleItem.meta.readTimes
    }
  });

  ctx.status = 200;
  ctx.set('Content-Type', 'application/json');
  ctx.body = JSON.stringify({ //查询成功并返回数据
    status: 'success',
    data: returnData
  });
  return next;
}