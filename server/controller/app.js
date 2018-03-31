'use strict'

// 用于封装controllers的公共方法

const mongoose = require('mongoose')

exports.hasBody = async (ctx, next) => {
  var body = ctx.request.body || {};
  console.log(body);

  if (Object.keys(body).length === 0) {
    ctx.body = JSON.stringify({status: failure});
    console.log()
    return next;
  }

  await next()
}
