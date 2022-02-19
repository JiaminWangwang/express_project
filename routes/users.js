var express = require('express');

// 后端路由，用于分配前端的请求
var router = express.Router();
// 模拟数据库
const users = [
  {username: '张三', password: '123'},
  {username: '李四', password: '234'},
];


// 数据库集合的相关配置
// 1. 定义数据集合的结构：定义出集合中数据有哪些属性，属性的值是什么类型。
const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  username: String,
  password: String
});

// 2. 定义数据集合的模型：将 schema 和数据库中的集合关联起来
// model('模型名称（自定义）'，usersSchema, '数据库中的集合名称(如果数据库中没有该集合则创建)')
const usersModel = model('usersModel', usersSchema, 'users')

router.post('/login', async function(req, res, next) {
  // 接收到前端发送的用户数据
  const user = req.body;  // { username: '123', password: '456' }
  const result = await usersModel.find(user);
  if (result.length > 0) {
    res.send({
      message: '登录成功',
      status: 1
    })
  } else {
    res.send({
      message: '登录失败',
      status: 0
    })
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
