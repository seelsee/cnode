/*
* @Author: only
* @Date:   2017-10-19 23:23:36
* @Last Modified by:   only
* @Last Modified time: 2017-10-19 23:27:36
*/
var express = require('express');
var router = express.Router();

//显示注册页面
router.get('/', function(req, res, next) {
  res.render('sign/signup' );
});
router.get('/signup', function(req, res) {
  res.render('sign/signup');
});
//提交注册信息
router.post('/signup', function (req, res) {

});

//显示登录页面
router.get('/signin', function(req, res) {
  res.render('sign/signin');
})

//登出
router.post('/signout', function(req, res) {

})

module.exports = router;
