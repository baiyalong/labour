'use strict';

// had enabled by egg
exports.static = {
    maxAge: 0
};

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}


exports.validate = {
    enable: true,
    package: 'egg-validate',
};


module.exports.passport = {
    enable: true,
    package: 'egg-passport',
  };