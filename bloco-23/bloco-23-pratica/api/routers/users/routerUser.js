const express = require('express');
const { created, userAll, findUser, updateUser } = require('../../controller/userController');
const { 
	validateName, 
	validateLastName, 
	validatepassword, 
	validateEmail
} = require('../../middleware/userMiddleware');

const userRouter = express.Router();


userRouter.post('/', validateName, validateLastName, validateEmail, validatepassword, created );

userRouter.get('/', userAll);

userRouter.get('/:id',findUser);

userRouter.put('/:id', validateName, validateLastName, validateEmail, validatepassword, updateUser);

module.exports = userRouter;