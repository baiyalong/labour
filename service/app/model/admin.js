//管理员

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Admin = app.model.define('admin', {
        username: STRING(32),   //用户名
        password: STRING(32),   //密码
    });

    return Admin;
};