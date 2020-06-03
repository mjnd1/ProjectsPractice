/**
 *把表单提交的数据变成 {emali:'sfsf@qq.com',password:123} 的样式
 *
 * @param {*} form  传入过来的form表单对象
 * @returns
 */
function serializeToJson(form) {
    var result = {};
    // [{name: 'email', value: '用户输入的内容'}]
    var f = form.serializeArray();
    f.forEach(function (item) {
        // result.email
        result[item.name] = item.value;
    });
    return result;
}