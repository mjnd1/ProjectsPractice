/** 博客前台文章详情展示处理函数 */
//导入文章集合构造函数
const {
    Article
} = require('../../model/article');
//导入评论集合构造函数
const {
    Comment
} = require('../../model/comment');

module.exports = async (req, res) => {
    //接收客户端传递过来的文章的id
    const id = req.query.id;
    //根据id查询文章详细信息
    /** 文章详细信息*/
    let article = await Article.findOne({
        _id: id
    }).populate('author');

    /** 当前文章的评论信息*/
    let comments = await Comment.find({
        aid: id
    }).populate('uid');

    //response.send('欢迎来到博客文章详情页面');
    //将查询到的文章详细信息传递给页面
    res.render('home/article.art', {
        article: article,
        comments: comments
    });
};