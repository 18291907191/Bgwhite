let userAuth = require('../middleware/userAuth');

module.exports = app => {
    //实现登陆拦截
    app.use('/admin/api/v1', userAuth)

    app.use('/user/api/v1', require('./user'));
    
    app.use('/article/api/v1', require('./articles'));

}