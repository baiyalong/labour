module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Worker = app.model.define('worker', {
        username: STRING(32),
        password: STRING(32),
    });

    return Worker;
};