//用户添加功能
// 引入 用户对象的构造函数
const {
    User,
    validateUser
} = require('../../model/user');

module.exports = async (req, res, next) => {

    try {
        await validateUser(req.body);
    } catch (e) {
        //验证没有通过
        //重定向到用户添加页面
        //通过模板字符串来
        //return res.redirect(`/admin/user-edit?message=${e.message}`);
        //JSON.stringify():将对象类型转换为字符串类型
        return next(JSON.stringify({
            path: '/admin/user-edit',
            message: e.message
        }));
    }

    //根据邮箱地址查询用户是否存在
    let user = await User.findOne({
        email: req.body.email
    });
    //如果用户已经存在：邮箱地址已经被别人占用
    if (user) {
        //重定向回用户添加页面
        //return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`);
        return next(JSON.stringify({
            path: '/admin/user-edit',
            message: '邮箱地址已经被占用'
        }));
    }
    //密码加密：没有做
    //将用户添加到数据库中
    await User.cerate(req.body);
    //将页面重定向到用户列表页面
    res.redirect('/admin/user');
};