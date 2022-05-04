const users = require('../models/user');

const userFindId = async (id) => {
	const user = await users.foundId(id);

	if(!user) throw { status: 404, menssage: 'usuario não encontrado' };

	return user;

};

const createdUser = async (firstName, lastName, email) => {

	const userCreated = await users.createdUser(firstName, lastName, email);

	return userCreated;
};

const updateUser = async (id, firstName, lastName, email) =>
	(await users.updateUser(id, firstName, lastName, email));

const getAll = async () => {
	const data =  await users.getAllUser(); 
	if(!data.length) return { status: 200, message: [] };
	return data;
};




module.exports = {
	createdUser,
	userFindId,
	getAll,
	updateUser
};