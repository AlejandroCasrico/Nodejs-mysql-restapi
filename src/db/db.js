
const pool = require('mysql2/promise');
const config = require('../../config.js')

const mysql = pool.createPool({
 host:config.host,
 user:config.user,
 password:config.password,
 port:config.db_port,
 database:config.database
});
module.exports = mysql;