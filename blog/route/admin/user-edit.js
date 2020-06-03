//用户编辑页面的路由
//引入 用户集合的构造函数
const {
    User
} = require('../../model/user');

module.exports = async (req, res) => {

    //标识  标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'user';

    //获取编辑失败的错误信息
    //获取编辑操作的用户的ID
    const {
        message,
        id
    } = req.query;

    //如果当前传递了id参数，说明是修改页面，反之为添加页码
    if (id) {
        //修改操作
        /** 根据ID查询对应的用户 */
        let user = await User.findOne({
            _id: id
        });

        //渲染用户编辑页面（修改）
        res.render('admin/user-edit', {
            message: message,
            user: user,
            /** 表单跳转的地址:传入ID字段，方便获取用户的信息 */
            link: '/admin/user-modify?id=' + id,
            /** button按钮的值*/
            button: '修改'
        });
    } else {
        //添加操作
        res.render('admin/user-edit', {
            message: message,
            link: '/admin/user-edit',
            button: '添加'
        });
    }

}