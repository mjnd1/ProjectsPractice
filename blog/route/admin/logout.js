module.exports = (req, res) => {
    //删除session
    req.session.destroy(function () {
        //删除cookie
        res.clearCookie('connect.sid');
        //重定向到用户登录页面
        res.redirect('/admin/login');
        //清除模板中的用户信息，防止用户退出登录后依然可以进行评论处理
        //req.app.locals.userInfo已经在login.js中声明
        req.app.locals.userInfo = null;
    });
};