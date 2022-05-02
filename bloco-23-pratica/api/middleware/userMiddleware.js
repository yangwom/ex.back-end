const validateName = (req, res, next) => {
	const { firstName } = req.body;
	if (!firstName) return next({ status: 400,  error: true, message: 'esse campo é obrigatorio'});
	next();
};

const validateLastName = (req, res, next) => {
	const { lastName } = req.body;
	if (!lastName) return next({ status: 400,  error: true, message: 'esse campo é obrigatorio'});
	next();
};


const validateEmail = (req, res, next) => {
	const { email } = req.body;
	if (!email) return next({ status: 400, error: 'true', message: 'esse campo é obrigatorio'});
	next();
};

const validatepassword = (req, res, next) => {
	const { password } = req.body;
	if (!password) return next({ status: 400, error: true, message: 'esse campo é obrigatorio'});
	if (password.length < 6) return next({ status: 400, error: true, message: 'no minimo 6 caracteres'});
	if(typeof password !== 'string') return next({ status: 400, error: true, message: 'NotNumber'});
	next();
};

module.exports = {
	validateName,
	validateLastName,
	validateEmail,
	validatepassword
};


