const titleValid = (req, res, next) => {
const { title } = req.body
if(!title || !title.length) return res.status(400).json({ message: 'os campos não pode ser vazios'});
next();
}

const authorIdValid = (req, res, next) => {
const { author_id } = req.body;

if(!author_id) return res.status(400).json({ message: 'os campos não pode ser vazios'}); 
next();
}

module.exports = {
    titleValid,
    authorIdValid
}