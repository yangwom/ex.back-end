const { Book } = require('../models')


const getAll = async () => {
	const data = await Book.findAll();

	return data;

}

const getById = async (id) => {
	const data = await Book.findByPk(id)
	if (!data) throw { status: 404, message: 'Book Not Found' };

	return data;
}


module.exports = {
	getAll,
	getById,
};