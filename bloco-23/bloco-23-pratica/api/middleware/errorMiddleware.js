// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, next) => {
	if (err.status) return res.status(err.status).json({ error: err.error, message: err.message });
	return res.status(500).json({ message: err.message });
};


module.exports = errorMiddleware;