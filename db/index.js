const Sequelize = require('sequelize');
const pg = require('pg')
const { DB } = require('../config')

const sequelize = new Sequelize(
	DB.NAME,
	DB.USER,
	DB.PASSWORD,
	DB.HOST,
	{
		logging: console.log,
		dialectModule: pg
	}
);

sequelize.authenticate()
	.then(res => console.info(`Database connected`))
	.catch(err => console.error(`Error connect to database: ${err.message}`))

const database = {};

// Models Definition
database.sequelize = sequelize;
database.m_city = require('./models/m_city')(sequelize, Sequelize);
database.m_hotel = require('./models/m_hotel')(sequelize, Sequelize);
database.m_destination_type = require('./models/m_destination_type')(sequelize, Sequelize);

// Models relationship

module.exports = database;
