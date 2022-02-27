const { usersModel } = require('./models/usersModel');
module.exports.login = async function (user) {
    const result = await usersModel.find(user);

    console.log('3333');
    console.log(result);
    // 查到数据库的结果，将结果传回service层做逻辑处理
    return result;
}