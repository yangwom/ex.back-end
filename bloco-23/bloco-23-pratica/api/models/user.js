const connection = require('./connection');

const getAllUser = async () => {
	const [ data ]   = await connection.execute('SELECT * FROM model_example.user');

	return data;
}; 

const foundId = async (paramsId) => {
	const query = 'SELECT * FROM model_example.user WHERE id = ?';
	const [ data ] = await connection.execute(query, [paramsId]);
	return data.filter((user) => user.id === Number(paramsId));
};

const updateUser = async (id, firstName, lastName, email)  => {
	const query = 'UPDATE model_example.user SET first_name = ?, last_name = ?, email = ? WHERE id = ?';	
	await connection.execute(query, [firstName, lastName, email, id]);
	return foundId(id);

};

const createdUser = async (firstName, lastName, email) => {
	const query = 'INSERT INTO model_example.user (first_name, last_name, email) VALUES(?,?,?)';
	const created = await connection.execute(query, [firstName, lastName, email]);
	return created;
};



module.exports = {
	getAllUser,
	foundId,
	updateUser,
	createdUser
};