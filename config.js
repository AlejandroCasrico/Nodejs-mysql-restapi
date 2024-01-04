const env = require('dotenv');
env.config();
 const port = process.env.PORT || 3000;
 const db_port = process.env.DB_PORT;
 const host = process.env.DB_HOST;
 const user = process.env.DB_USER;
 const password = process.env.DB_PASSWORD;
 const database =process.env.DB_DATABASE;

 module.exports = {
    port,
    host,
    user,
    password,
    database,
    db_port
};