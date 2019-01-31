// let jwtAuth = require('../middleware/jwtAuth')

module.exports = app => {
    //实现登陆拦截
    // app.use('/api', jwtAuth)

    // app.get('/api', (req, res) => {
    //     res.json({ message: '欢迎使用justyeh的API服务！' });
    // })

    app.use('/user/api/v1/', require('./user'));
    app.use('/article/api/v1/', require('./articles'));

    // app.use('/api/tag', require('./tag'))

    // app.use('/api/post/tag', require('./postTag'))

}