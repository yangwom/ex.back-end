const express = require('express');
const login = require('./generete')

const app = express();
app.use(express.json());

const PORT = 3001;

app.post('/', login, async (req, res) => {
return res.status(200).send('seja bem vindo')
} )

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});