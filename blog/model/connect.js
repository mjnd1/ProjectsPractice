//引入mongoose第三方模块
const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb+srv://chenzhiwei:123321@blog-sf0jb.azure.mongodb.net/test?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log('数据库连接失败' + err);
    })