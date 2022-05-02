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

const foundId = async (paramsId) => {
	const query = 'SELECT * FROM model_example.user WHERE id = ?';
	const [ data ] = await connection.execute(query, [paramsId]);
	return data.find((user) => user.id === Number(paramsId));
};

const updateUser = async (id)  => {
	const query =
('UPDATE model_example.user SET firt_name = "carol", last_name = "santana", email = "santana@gmail.com"   WHERE id = ?');
	const [ data ] = await connection.execute(query, [id]);
	return data.find((user) => user.id === Number(id));
};

module.exports = {
	getAllUser,
	createdUser,
	foundId,
	updateUser
};