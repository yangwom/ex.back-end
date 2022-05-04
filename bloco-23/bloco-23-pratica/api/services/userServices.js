const users = require('../models/user');

const userFindId = async (id) => {
	const user = await users.foundId(id);

	if(!user) throw { status: 400, menssage: 'usuario não encontrado' };

	return user;

};

const createdUser = async (firstName, lastName, email) => {

	const userCreated = await users.createdUser(firstName, lastName, email);

	return userCreated;
};

const updateUser = async (id, firstName, lastName, email) =>
	(await users.updateUser(id, firstName, lastName, email));

const getAll = async () => await users.getAllUser();




module.exports = {
	createdUser,
	userFindId,
	getAll,
	updateUser
};