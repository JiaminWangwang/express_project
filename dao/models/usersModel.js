// 1. 定义数据集合的结构：定义出集合中数据有哪些属性，属性的值是什么类型。
const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  username: String,
  password: String
});

// 2. 定义数据集合的模型：将 schema 和数据库中的集合关联起来
// model('模型名称（自定义）'，usersSchema, '数据库中的集合名称(如果数据库中没有该集合则创建)')
const usersModel = model('usersModel', usersSchema, 'users');

module.exports.usersModel = usersModel;
