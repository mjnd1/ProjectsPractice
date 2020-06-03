//1.引入mongoose模块
const mongoose = require('mongoose');

//2.创建文章集合规则
const articleSchema = new mongoose.Schema({
    //文章标题
    title: {
        type: String,
        maxlength: 20,
        minlength: 4,
        //设置为必填字段，没有时报错:'请填写文章标题'
        required: [true, '请填写文章标题']
    },
    //文章作者
    author: {
        //ObjectId：_id字段
        type: mongoose.Schema.Types.ObjectId,
        //与User的_id字段关联
        ref: 'User',
        required: [true, '请填写作者']
    },
    //发布时间
    publishDate: {
        type: Date,
        defalut: Date.now
    },
    //文章封面
    cover: {
        type: String,
        defalut: null
    },
    //文章内容
    content: {
        type: String
    }
});

//3.根据规则创建集合
/** 文章集合构造函数 */
const Article = mongoose.model('Article', articleSchema);

//4.将集合规则做完模板成员进行导出
module.exports = {
    Article: Article
}