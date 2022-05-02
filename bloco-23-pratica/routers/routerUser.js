const express = require('express');
const dataUser = require('../models/user');
const { 
	validateName, 
	validateLastName, 
	validatepassword, 
	validateEmail
} = require('../middleware/userMiddleware');

const router = express.Router();


router.post('/', validateName, validateLastName, validatepassword, validateEmail, async (req, res) => {
	const { firstName, lastName, email } = req.body;
	await dataUser.createdUser(firstName, lastName, email);
	return res.status(201).json({ firstName, lastName, email });
	
});

router.get('/', async (req, res) => {
	const data = await dataUser.getAllUser();
	if(!data.length) return res.status(200).json([]);
	return res.status(200).json(data);

	

});

module.exports = router;