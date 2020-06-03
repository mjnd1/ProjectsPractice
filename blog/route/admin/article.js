//引入文章集合构造函数
const {
    Article
} = require('../../model/article');
//引入 第三方分页模块
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {

    //接收客户端传递过来的页码
    const page = req.query.page;

    //标识  标识当前访问的是文章管理页面
    req.app.locals.currentLink = 'article';

    /** 查询所有文章数据 ,进行关联查询，因为需要作者的名称*/
    //let articles = await Article.find().populate('author');

    /**
     *page:指定当前页
     size:指定每页显示的数据个数
     display:指定客户端要显示的页码数量
     exec:向数据库中发送查询请求
     */
    let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();

    //res.render('ok');
    //渲染文章列表页面模板
    res.render('admin/article.art', {
        articles: articles
    });
};