const express = require('express')
const controllers = require('../../controllers/booksControllers')


const routerBooks = express.Router();


routerBooks.use('/', controllers.getAll)



module.exports = routerBooks;