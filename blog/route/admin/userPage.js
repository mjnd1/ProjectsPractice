/** 用户列表功能 */

//引入 用户集合构造函数
const {
    User
} = require('../../model/user');
//导出
module.exports = async (req, res) => {

    //标识  标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'user';

    // 接收客户端传递过来的当前页 的参数
    /** 当前页的数值 */
    let page = req.query.page || 1;
    // 每一页显示的数据个数
    let pagesize = 7;
    /** 查询用户数据的总数 */
    let count = await User.countDocuments({});
    /**总页数 */
    let total = Math.ceil(count / pagesize);

    //从页码对应的数据 查询开始位置
    let start = (page - 1) * pagesize;

    //将用户信息从数据库中查询出来
    /** 用户信息集合 */
    let users = await User.find({}).limit(pagesize).skip(start);
    //渲染用户列表模块  admin/user.art
    res.render('admin/user', {
        users: users,
        total: total,
        page: page,
        count: count
    });
};