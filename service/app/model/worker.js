//工人

module.exports = app => {

    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Worker = app.model.define('worker', {
        username: STRING(32),   //用户名
        password: STRING(32),   //密码
        weixin: STRING(32),     //微信
        //姓名
        //性别
        //年龄
        //身份证号
        //手机号码
        //地址
        //角色（普通工人、队长）
        //行业（建筑、家政、教育...）
        //头像
        //工作经验

    });

    return Worker;
};