const express = require('express');
const dataUser = require('../models/user');
const { 
	validateName, 
	validateLastName, 
	validatepassword, 
	validateEmail
} = require('../middleware/userMiddleware');

const router = express.Router();


router.post('/', validateName, validateLastName, validatepassword, validateEmail, (req, res) => {
	return res.status(201).json({ message: 'created'});

});

router.get('/', async (req, res) => {
	const data = await dataUser.getAllUser();
	if(!data.length) return res.status(200).json([]);
	return res.status(200).json(data);

	

});

module.exports = router;