const services = require('../services/userServices');

const created = async (req, res, next) => {
	const { firstName, lastName, email } = req.body;
	try {
		const createdUser = await services.createdUser(firstName, lastName, email);
		return res.status(201).json(createdUser);
	} catch(err) {
		return next(err);
	}

};

const userAll = async (req, res, next) => {
	try {
		const data = await services.getAll();
		return res.status(200).json(data);
	} catch(err) {
		return next(err);
	}
};
	

const findUser =  async (req, res, next)=> {
	const { id } = req.params;
	try {
		const dataId = await services.userFindId(id);
		return res.status(200).json(dataId);
	} catch (err) {
		return next(err);
	}
	
	
};

module.exports = {
	created,
	userAll,
	findUser
};