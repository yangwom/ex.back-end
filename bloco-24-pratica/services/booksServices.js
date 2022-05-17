const { Book } = require('../models')


const getAll = async () => {
const data = await Book.findAll();

return data;

}


module.exports = {
    getAll,
};