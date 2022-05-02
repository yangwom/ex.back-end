const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
	return res.status(200).json({message: 'seja bemvindo'});
}); 

app.listen(PORT, ()=> console.log(`ouvindo na porta ${PORT}`));