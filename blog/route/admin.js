//构建路由
//1.引用模块
const express = require('express');

// 创建博客展示页面路由
const admin = express.Router();

//下面的都是二级路由，一级路由已经在app.js中声明了
//渲染登录页面
admin.get('/login', (requser, response) => {
    //response.send('欢迎来到登录界面');
    response.render('admin/login');
});

//实现登录功能
admin.post('/login', require('./admin/login'));

//创建用户列表路由
admin.get('/user', require('./admin/userPage'));

//实现退出功能
admin.get('/logout', require('./admin/logout'));

//创建用户编辑页面路由
admin.get('/user-edit', require('./admin/user-edit'));

//创建用户添加功能路由
admin.post('/user-edit', require('./admin/uesr-edit-fn'));

//创建用户修改功能路由
admin.post('/user-modify', require('./admin/user-modify'));

//创建用户删除功能路由
admin.get('/delete', require('./admin/user-delete'));

//文章列表页面路由
admin.get('/article', require('./admin/article'));

//文章编辑页面路由
admin.get('/article-edit', require('./admin/article-edit'));

//实现文章添加功能的路由
admin.post('/article-add', require('./admin/article-add'));

//2.将路由对象做为模块成员进行导出
module.exports = admin;