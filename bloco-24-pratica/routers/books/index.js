const express = require('express')
const controllers = require('../../controllers/booksControllers')


const routerBooks = express.Router();


routerBooks.get('/', controllers.getAll);
routerBooks.get('/:id', controllers.getById);



module.exports = routerBooks;