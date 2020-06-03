//实现文章添加功能
//引入 formidable第三方模块：处理表单的二进制数据
const formidable = require('formidable');
//引入 文章集合构造函数
const {
    Article
} = require('../../model/article');
const path = require('path');

module.exports = (req, res) => {
    //1.创建表单解析对象
    const form = new formidable.IncomingForm();
    //2.配置上传文件的存放位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    //3.保留上传文件的后缀名
    form.keepExtensions = true;
    //4.解析表单
    //req：需要解析的表单请求对象
    form.parse(req, async (err, fields, files) => {
        /**
         *err:错误对象，如果解析失败，存储错误信息，反之为null
         fields：对象类型，保存普通表单数据
         files：对象类型，保存了和上传文件相关的数据
         split('public')：以public分割字符串，将文件的路径保存到数据库中
         */
        await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content
        });

        //将页面重定向到文章列表页面
        res.redirect('/admin/article');
    });
};