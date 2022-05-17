const express = require('express')
const routerBooks = require('./books')

const router = express.Router();


router.use('/books', routerBooks)




module.exports = router