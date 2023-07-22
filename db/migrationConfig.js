const cfg = {};
const conf = {};
const { DB, NODE_ENV } = require('../config')

conf.environment = NODE_ENV;
conf.sequelize = {};
conf.sequelize.username = DB.USER;
conf.sequelize.password = DB.PASSWORD;
conf.sequelize.database = DB.NAME;
conf.sequelize.host = DB.HOST.host;
conf.sequelize.dialect = DB.HOST.dialect;
conf.sequelize.port = DB.HOST.port;
conf.sequelize.define = {
    schema: 'public',
    charset: 'utf8mb4'
};
conf.sequelize.dialectOptions = {
    collate: 'utf8mb4_unicode_ci'
};

if(process.env.DB_SSL){
    conf.sequelize.dialectOptions.ssl = {
        require: true,
        rejectUnauthorized: true,
        ca: [process.env.DB_SSL]
    }
}
conf.ROUND_SALT = 8;

cfg[conf.environment] = conf.sequelize;

module.exports = cfg;
