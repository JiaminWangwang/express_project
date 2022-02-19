var express = require('express');

// 后端路由，用于分配前端的请求
var router = express.Router();

/* GET users listing. */

// 模拟数据库
const users = [
  {username: '张三', password: '123'},
  {username: '李四', password: '234'},
]

router.post('/login', function(req, res, next) {
  console.log('成功进入登录接口后端');

  // 获取前端发送给后端的请求数据
  // -post req.body
  // -get req.query
  console.log(req.body)
  // todo:登录判断

  const result = users.some((item, index) => {
    return item.username === req.body.username && item.password === req.body.password
  });

  // 将后端处理结果响应（发送）给前端
  if (result) {
    res.send({
      message: '登录成功',
      status: 1
    });
  } else {
    res.send({
      message: '登录失败',
      status: 0
    });
  }
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
