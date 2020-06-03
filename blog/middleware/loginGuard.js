const guard = (req, res, next) => {
    //判断用户访问的 是否 是登录界面
    //判断用户的登录状态
    //如果用户是登录的，将请求方行
    //如果用户不是登录的，将请求重定向到登录界面
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        //如果用户是登录状态，并且是一个普通用户
        //req.session.role在login.js中已经声明
        if (req.session.role == 'normal') {
            //让它跳转到博客首页，阻止程序向下运行
            res.redirect('/home/');
            return;
        }
        //用户是登录状态，放行
        next();
    }
}

module.exports = guard;