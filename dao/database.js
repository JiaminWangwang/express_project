// 将express项目与mongodb服务器连接起来
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/studentSystem';  // 项目需要连接的mongodb数据库地址
mongoose.connect(dbURI);
// 当项目与数据库连接成功时，触发下列事件
mongoose.connection.on('connected', function() {
    console.log(dbURI + '数据库连接成功');
});