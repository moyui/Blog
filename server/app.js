'use strict'

const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/blog';
mongoose.Promise = require('bluebird');
/**
 * mongoose连接数据库
 * @type {[type]}
 */
mongoose.connect(db);

/**
 * 获取数据库表对应的js对象所在的路径
 * @type {[type]}
 */
require('./model/model.js');

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());

/**
 * 使用路由转发请求
 * @type {[type]}
 */
const router = require('./config/router.js')();

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(9000, () => {
  console.log('服务器运行在9000上');
});