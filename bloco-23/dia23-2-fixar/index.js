const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());


app.get('/', (req, res) => res.status(200).send('seja bem vindo'));

app.listen(PORT, () => console.log('ouvindo na porta 3000'));

