const express = require('express');
const { created, userAll, findUser, updateUser } = require('../controller/userController');
const { 
	validateName, 
	validateLastName, 
	validatepassword, 
	validateEmail
} = require('../middleware/userMiddleware');

const router = express.Router();


router.post('/', validateName, validateLastName, validateEmail, validatepassword, created );

router.get('/', userAll);

router.get('/:id',findUser);

router.put('/:id', validateName, validateLastName, validateEmail, validatepassword, updateUser);

module.exports = router;