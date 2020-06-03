//评论功能
//导入评论集合构造函数
const {
    Comment
} = require('../../model/comment');

module.exports = async (req, res) => {
    //接收客户端传递过来的参数 post
    const {
        content,
        uid,
        aid
    } = req.body;

    //将评论信息存储到评论集合中
    await Comment.create({
        aid: aid,
        uid: uid,
        time: new Date(),
        content: content
    });

    //将页面重定向回文章详细页面,并且传入文章id
    res.redirect('/home/article?id=' + aid);
};