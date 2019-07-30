//
const orm = require('../config/orm.js');

const user = {
    selectAll : (callback) => {
        orm.selectAll('user', (res) => {
            callback(res);
        });
    },
};

module.exports = user;