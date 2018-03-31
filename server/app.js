'use strict'

const Koa = require('koa');
const mongoose = require('mongoose');


/**
 * mongoose连接数据库
 * @type {[type]}
 */
const db = 'mongodb://loaclhost/';
mongoose.Promise = require('bluebird');
mongoose.connect(db);
db.on('error', console.error.bind(console, '连接错误'));

/**
 * 获取数据库表对应的js对象所在的路径
 * @type {[type]}
 */



/**
 * 使用路由转发请求
 * @type {[type]}
 */

const app = new Koa();
const router = require('./config/router.js');

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(27017, '45.32.203.201', () => {
  console.log('服务器运行在45.32.203.201:80上');
});