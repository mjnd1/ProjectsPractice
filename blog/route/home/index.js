/** 博客首页处理函数 */
//引入 文章集合构造函数
const {
    Article
} = require('../../model/article');
//引入分页模块
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    //获取页码值
    let page = req.query.page;

    //从数据库中查询数据
    let result = await pagination(Article)
        .page(page).size(4).display(5)
        .find().populate('author').exec();

    //渲染模板并传递参数
    res.render('home/default.art', {
        result: result
    });
};