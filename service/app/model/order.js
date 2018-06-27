//工单

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Order = app.model.define('order', {
        title: STRING,  //标题
        content: STRING,//内容
        //行业（建筑、家政、教育...）
        //队长
        //地址/位置
        //需要多少人
        //已报名人数
        //报名截止时间
        //状态（开放报名、已过期）

    });

    return Order;
};