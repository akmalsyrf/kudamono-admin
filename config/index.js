const CONFIG = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.SERVICE_PORT || 3010,
	DB: {
		NAME: process.env.DB_NAME || 'kudamono_db',
		USER: process.env.DB_USER || 'postgres',
		PASSWORD: process.env.DB_PASSWORD || 'password',
		HOST: {
			host: process.env.DB_HOST || 'localhost',
			port: process.env.DB_PORT || 5432,
			dialect: process.env.DB_DIALECT || 'postgres',
			schema: process.env.DB_SCHEMA || 'public',
			pool: {
				max: process.env.DB_MAX_POOL || 5,
				min: process.env.DB_MIN_POOL || 0,
				acquire: process.env.DB_ACQUIRE || 30000,
				idle: process.env.DB_IDLE || 10000
			},
			define: {
				timestamps: false,
				freezeTableName: true
			},
			dialectOptions: process.env.DB_SSL ? {
				ssl: {
					require: true,
					rejectUnauthorized: true,
					ca: [process.env.DB_SSL]
				}
			} : {}
		}
	},
};

module.exports = CONFIG;
