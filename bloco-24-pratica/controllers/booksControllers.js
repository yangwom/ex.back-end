const services = require('../services/booksServices')


const getAll = async (req, res, next) => {
  try {
    const data = await services.getAll();
    return res.status(200).json(data);

  } catch(err) {
    next(err)
  }
}


module.exports = {
  getAll,
}