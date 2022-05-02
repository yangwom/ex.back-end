const connection = require('./connection');

const getAllUser = async () => {
	const [ data ]   = await connection.execute('SELECT * FROM model_example.user');

	return data;
}; 

module.exports = {
	getAllUser
};