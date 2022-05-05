const users = require('../models/user');


const concat = ({id, firstName, lastName, email}) => {
	const fullName = [firstName, lastName].map(data => data).join(' ');

	return {
		id,
		firstName,
		lastName,
		email,
		name: fullName,
	};
};

const camelCase = (users) => users.map(({ id, first_name, last_name, email}) => concat({
	id,
	firstName: first_name,
	lastName: last_name,
	email,
}));


const getAll = async () => {
	const data =  await users.getAllUser(); 
	if(!data.length) return  [] ;
	return camelCase(data);
};

const userFindId = async (id) => {
	const user = await users.foundId(id);

	if(!user) throw { status: 400, message: 'usuario não encontrado' };

	return camelCase(user);

};



const createdUser = async (firstName, lastName, email) => {

	const userCreated = await users.createdUser(firstName, lastName, email);

	return {
		id:userCreated.insertId,
		firstName,
		lastName,
		email
	}; 
};

const updateUser = async (id, firstName, lastName, email) => {
	const update =  await users.updateUser(id, firstName, lastName, email);
	if(!update) throw {
		status: 404,
		message: 'Usuário não encontrado'
	};
	return camelCase(update);
};






module.exports = {
	createdUser,
	userFindId,
	getAll,
	updateUser
};