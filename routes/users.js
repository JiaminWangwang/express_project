var express = require('express');

// 后端路由，用于分配前端的请求
var router = express.Router();
// 模拟数据库
const users = [
  {username: '张三', password: '123'},
  {username: '李四', password: '234'},
];

// 引入服务层暴露出来的方法
const { login } = require('../service/usersService')

router.post('/login', async function(req, res, next) {
  // 接收到前端发送的用户数据
  const user = req.body;  // { username: '123', password: '456' }
  const data = await login(user);
  res.send(data);
});

router.post('/register', function(req, res, next) {
  console.log('成功进入注册接口后端');
  // todo:注册判断

  // 将后端处理结果响应（发送）给前端
  res.send({
    message: '注册成功',
    status: 1
  });
});

module.exports = router;
