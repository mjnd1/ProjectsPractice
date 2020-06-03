//构建路由
//1.引用模块
const express = require('express');
// 创建博客展示页面路由
const home = express.Router();

//下面的都是二级路由，一级路由已经在app.js中声明了
//博客前台首页的展示页面
home.get('/', require('./home/index'));

//博客前台文章详情展示页面路由
home.get('/article', require('./home/article'));

//创建评论功能路由
//在article.art中的form访问过来的
home.post('/comment', require('./home/comment'));

//2.将路由对象做为模块成员进行导出
module.exports = home;