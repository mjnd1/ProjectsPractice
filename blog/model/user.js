// 创建用户集合
// 引入mongoose第三方模块
const mongoose = require('mongoose');
//引入 joi ：javascript规则验证模块
const Joi = require('@hapi/joi');

//集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        //保证邮箱地址中插入数据库时不重复
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin  超级管理员
    // normal 普通用户
    role: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        // 0 启用状态
        // 1 禁言状态
        default: 0
    }
});

//创建集合
const User = mongoose.model('User', userSchema);

async function creatUser() {
    const salt = await User.create({
        username: 'chenzhiwei1',
        email: 'qazwsxedc@qq.com',
        password: '123456',
        role: 'normal',
        state: 1
    });
}
// creatUser();

//验证用户信息
const validateUser = (user) => {
    //1.准备验证规则
    const schema = {
        //string:字符串类型
        //required:为必填项
        //error:自定义错误信息
        //regex:正则表达式
        //valid:必须是里面的值的一个
        username: Joi.string().required().min(2).max(12).error(new Error('用户名不符合要求')),
        email: Joi.string().email().required().error(new Error('邮箱不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码不符合要求')),
        role: Joi.string().required().valid('normal', 'admin').error(new Error('角色不符合要求')),
        state: Joi.number().required().valid(0, 1).error(new Error('状态值不符合要求'))
    };
    //2.实施验证
    return Joi.validate(user, schema);
}

//将用户集合做为模块成员进行导出
module.exports = {
    User: User,
    validateUser
}