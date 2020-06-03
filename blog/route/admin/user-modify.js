//修改用户信息的功能
//引入 用户集合的构造函数
const {
    User
} = require('../../model/user');

module.exports = async (req, res, next) => {
    //接收客户端传递过来的请求参数：user-edit.art
    const {
        username,
        email,
        role,
        state,
        password
    } = req.body;
    //接收要修改的用户id：user-edit.js传入过来的
    const id = req.query.id;

    //根据id查询用户对应的密码：注意密码是不能修改的
    let user = await User.findOne({
        _id: id
    });
    console.log(user);
    console.log(password);

    //进行密码对比
    const isValid = user.password == password ? true : false;

    //密码对比成功
    if (isValid) {
        //将用户信息更新到数据库中
        await User.updateOne({
            _id: id
        }, {
            username: username,
            email: email,
            role: role,
            state: state
        });

        //重定向到用户列表页面
        res.redirect('/admin/user');
    } else {
        //密码对比失败
        let obj = {
            path: '/admin/user-edit',
            message: '密码对比失败，不能进行用户信息的修改',
            id: id
        }
        //触发错误中间件
        next(JSON.stringify(obj));
    }
};