const mysql = require('mysql2');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'hoot',
	password: 'docker',
	database: 'model_example'
});

module.exports = connection;