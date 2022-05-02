const express = require('express');
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

module.exports = router;