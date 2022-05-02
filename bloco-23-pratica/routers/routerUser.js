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

router.get('/', (req, res) => {
	return res.status(200).json([]);
});

module.exports = router;