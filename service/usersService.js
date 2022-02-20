const { login } = require('../dao/usersDao');

module.exports.login = async function (user) {
    // 调用持久层的usersDao中的login方法，将user传到第三层
    const data = await login(user);
    if (data.length > 0) {
      return {
          message: '登录成功',
          status: 1
      }
    } else {
      return {
          message: '登录失败',
          status: 0
      }
    }
}