require("dotenv").config();

module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST,
    port: process.env.MYSQL_SRV_PORT,
  },
  cacheService: {
    host: process.env.REDIS_SRV_HOST || "localhost",
    port: process.env.REDIS_SRV_PORT || 3003,
  },
  post: {
    host: process.env.POST_HOST,
    port: process.env.POST_PORT,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS,
  },
};
