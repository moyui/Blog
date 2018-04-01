'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * 定义article表模式
 * @type {mongoose}
 */
const ArticleSchema = new Schema({
  title: {
    type: String,
    defalut: "默认标题"
  },
  archive: {
    type: String,
    defalut: "默认分类"
  },
  abstract: {
    type: String,
    defalut: "这里是空的.."
  },
  page: {
    type: String,
    defalut: "这里空空如也啊喵..."
  },
  comments: [
    {
      body: String,
      modifyAt: Date,
      userId: Number
    }
  ],
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    },
    readTimes: {
      type: Number,
      defalut: 0
    }
  }
});

ArticleSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
    this.meta.readTimes = 0;
  }
  else {
    this.meta.updateAt = Date.now();
    this.meta.readTimes = this.meta.readTimes + 1;
  }
  next();
});

/**
 * 定义模型Article
 * @type {[type]}
 */
// 参数Article 数据库中的集合名称, 不存在会创建.
const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
