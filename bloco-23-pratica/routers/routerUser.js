const express = require('express');
const dataUser = require('../models/user');
const { 
	validateName, 
	validateLastName, 
	validatepassword, 
	validateEmail
} = require('../middleware/userMiddleware');

const router = express.Router();


router.post('/', validateName, validateLastName, validateEmail, validatepassword, async (req, res) => {
	const { firstName, lastName, email } = req.body;
	await dataUser.createdUser(firstName, lastName, email);
	return res.status(201).json({ firstName, lastName, email });
	
});

router.get('/', async (req, res) => {
	const data = await dataUser.getAllUser();
	if(!data.length) return res.status(200).json([]);
	return res.status(200).json(data);

	

});

router.get('/:id', async (req, res)=> {
	const { id } = req.params;
	const dataId = await dataUser.foundId(id);
	if(!dataId) return res.status(404).json({'error': true,	'message': 'Usuário não encontrado'});
	return res.status(200).json(dataId);
});

router.put('/:id', validateName, validateLastName, validateEmail, validatepassword, async (req, res)=> {
	const { id } = req.params;
	const updateId = await dataUser.updateUser(id);
	return res.status(200).json(updateId);
	
});

module.exports = router;