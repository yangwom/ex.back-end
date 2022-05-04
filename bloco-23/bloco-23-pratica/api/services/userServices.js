const users = require('../models/user');

const userFindId = async (id) => {
	const user = await users.foundId(id);

	if(!user) throw { status: 400, message: 'usuario não encontrado' };

	return user;

};

const createdUser = async (firstName, lastName, email) => {

	const userCreated = await users.createdUser(firstName, lastName, email);

	return userCreated;
};

const updateUser = async (id, firstName, lastName, email) => {
	const update =  await users.updateUser(id, firstName, lastName, email);
	if(!update) throw {
		status: 404,
		message: 'Usuário não encontrado'
	};
	return update;
};

const getAll = async () => {
	const data =  await users.getAllUser(); 
	if(data.length) return  [] ;
	return data;
};




module.exports = {
	createdUser,
	userFindId,
	getAll,
	updateUser
};