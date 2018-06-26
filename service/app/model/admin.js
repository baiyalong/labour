module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Admin = app.model.define('admin', {
        username: STRING(32),
        password: STRING(32),
    });

    return Admin;
};