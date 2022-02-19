var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get', function(req, res, next) {
    // 获取前端发送给后端的请求数据
    // -post req.body
    // -get req.query
    console.log(req.query);

    res.send({
        message: '获取电影成功',
        status: 1,
        data: {
            name: 'xxx',
            path: 'http://www.xxx.com',
            type: '动作'
        }
    });
});

module.exports = router;
