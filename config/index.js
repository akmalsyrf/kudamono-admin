const CONFIG = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.SERVICE_PORT || 3010,
	DB: {
		NAME: process.env.DB_NAME || 'verceldb',
		USER: process.env.DB_USER || 'default',
		PASSWORD: process.env.DB_PASSWORD || 'hUB3Wrz2ZVaM',
		HOST: {
			host: process.env.DB_HOST || 'ep-gentle-base-226714-pooler.ap-southeast-1.postgres.vercel-storage.com',
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
			dialectOptions: {
				ssl: {
					require: true
				}
			}
		}
	},
};

module.exports = CONFIG;
