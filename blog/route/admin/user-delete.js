//用户删除功能
//引入 用户集合构造函数
const {
    User
} = require('../../model/user');

module.exports = async (req, res) => {
    //获取用删除的用户id
    let id = req.qurey.id;
    //根据id删除用户
    await User.findOneAndDelete({
        _id: id
    });
    //将页面重定向到用户列表页面
    //重定向的是URL地址   admin/user.art
    res.redirect('/admin/user');
};