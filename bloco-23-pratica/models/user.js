const connection = require('./connection');

const getAllUser = async () => {
	const [ data ]   = await connection.execute('SELECT * FROM model_example.user');

	return data;
}; 

const createdUser = async (firstName, lastName, email) => {
	const query = 'INSERT INTO model_example.user (first_name, last_name, email) VALUES(?,?,?)';
	const created = await connection.execute(query, [firstName, lastName, email]);
	return created;
};
module.exports = {
	getAllUser,
	createdUser
};