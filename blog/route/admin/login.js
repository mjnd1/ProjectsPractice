// 引入用户集合构造函数
const {
    User
} = require('../../model/user');

//导出
module.exports = async (req, res) => {
    //接收请求参数
    const {
        email,
        password
    } = req.body;

    //如果用户没有输入邮箱地址
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', {
            msg: '邮箱地址或者密码错误'
        });
    };

    //根据邮箱地址查询用户信息
    //如果查询到用户，user变量的值为对象类型，对象中存储的是用户信息
    //如果没有查询到用户，user为空
    let user = await User.findOne({
        email
    });
    //查询到用户
    if (user) {
        //将客户端的密码和用户信息中的密码进行对比
        if (password == user.password) {
            //登录成功
            //将消息保存到session域中
            req.session.username = user.username;
            /** 将用户角色存储在session对象中
             * 在登录拦截loginGuard.js的时候根据用户角色，阻止普通用户进入后台页面
             */
            req.session.role = user.role;

            //将用户信息保存到app.locals中，所有模板都可以访问
            req.app.locals.userInfo = user;

            //对用户的角色进行判断
            if (user.role == 'admin') {
                //超级管理员：进入后台页面
                //重定向到用户列表页面(重定向到不了:应该是域的问题)
                res.redirect(302, '/admin/user');
            } else {
                //重定向到博客首页
                res.redirect('/home/');
            }

        } else {
            //没有
            res.status(400).render('admin/error', {
                msg: '邮箱地址或者密码错误'
            });
        }
    } else {
        //没有查询到此用户
        res.status(400).render('admin/error', {
            msg: '邮箱地址或者密码错误'
        });
    }
};