const express = require('express');
const routerUser = require('./routers/routerUser');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
	return res.status(200).json({message: 'seja bemvindo'});
}); 

app.use('/user', routerUser);
app.use(errorMiddleware);

app.listen(PORT, ()=> console.log(`ouvindo na porta ${PORT}`));