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
  try {
    if (!Number.isSafeInteger(limit)) {
      throw new Error('数量错误');
    }

    const articleItems = await Article 
                          .find()
                          .sort({field: 'desc'})
                          .skip((page-1)*limit)
                          .limit(limit)
                          .lean();//进行数据库查询

  } catch(err) {
    console.log(err);
    ctx.body = JSON.stringify({status: 'failure'});//查询失败
    return next;
  }
  const listArr = Object.keys(articleItems)//除去commets,page项并转换为数组
                        .filter((item) => {
                          return (item !== 'comments') && (item !== 'page');
                        })
                        .map((item) => {
                          return articleItems[item]
                        });
  ctx.body =  JSON.stringify({ //查询成功并返回数据
    status: 'success',
    data: listArr
  });
  return next;
}