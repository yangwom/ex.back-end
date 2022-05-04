const express = require('express');
const dataUser = require('../models/user');
const { created, userAll, findUser } = require('../controller/userController');
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

router.put('/:id', validateName, validateLastName, validateEmail, validatepassword, async (req, res)=> {
	const { id } = req.params;
	const { firstName, lastName, email, password } = req.body;
	const updadte = await dataUser.updateUser(id, firstName, lastName, email, password);
	if(!updadte) return res.status(404).json({
		'error': true,
		'message': 'Usuário não encontrado'
	});
	return res.status(200).json(updadte);
	
});

module.exports = router;