//1.引用模块
const express = require('express');
// 处理路径模块
const path = require('path')
// 引入body-parser模块  用来处理post请求参数
const bodyPaser = require('body-parser');
// 引入session模块
const session = require('express-session');

//导入art-tempate模板引擎
const template = require('art-template');
//导入dateformat模块
const dateFormat = require('dateformat');

//2.创建网站服务器
const app = express();

//数据库连接
require('./model/connect');

// 处理post 请求参数
app.use(bodyPaser.urlencoded({
    extended: false
}));

//配置session
app.use(session({
    //服务器端生成session的签名
    secret: 'secret key',
    //(是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对session进行修改覆盖并保存
    resave: true,
    //初始化session时是否保存到存储
    saveUninitialized: true,
    //设置返回到前端key的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// 告诉express框架模块所在的位置
app.set('views', path.join(__dirname, 'views'));
// 告诉express框架模块的默认后缀名
app.set('view engine', 'art');
//当渲染后缀名为art的模块时，所使用的模块引擎是什么
app.engine('art', require('express-art-template'));

//向模板内部导入dateFormate变量，方便.art文件调用
template.defaults.imports.dateFormat = dateFormat;

//开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));


//引入路由模块
const home = require('./route/home');
const admin = require('./route/admin');

//拦截请求，判断用户登录状态
app.use('/admin', require('./middleware/loginGuard'));


//为路由匹配请求路径
//此处为一级路由
app.use('/home', home);
app.use('/admin', admin);

//处理公共的错误中间件
app.use((err, req, res, next) => {
    //将字符串转换为对象形式
    //JSON.parse()
    console.log("11111");
    console.log(err);

    const result = JSON.parse(err);
    //{path: '/admin/user-edit',message: '密码对比失败，不能进行用户信息的修改',id: id}
    let params = [];
    //遍历消息对象
    for (let attr in result) {
        //将message和id添加到数组中，然后数组添加到URL后面，方便获取
        if (attr != 'path') {
            //attr + '=' + result[attr] 相当于 message=密码对比失败，不能进行用户信息的修改
            params.push(attr + '=' + result[attr]);
        }
    }
    //join('&'):使用 & 分割数组的每个元素
    res.redirect(`${result.path}?${params.join('&')}`);
});


//3.监听端口
app.listen(3000);
console.log("网站服务器启动成功，请访问localhost:3000");