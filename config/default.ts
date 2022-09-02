import dotenv from 'dotenv';
dotenv.config();


export default {
    port: process.env.PORT || 8080,
    host: process.env.HOST || 'localhost',
    dbUri: process.env.DB_URI,
    jwtSecret: process.env.JWT_SECRET,
    saltWortkFactor: process.env.SALT_WORK_FACTOR,
    accessTokenTtl: process.env.ACCESS_TOKEN_TTL,
    refreshTokenTtl: process.env.REFRESH_TOKEN_TTL,
 
  };