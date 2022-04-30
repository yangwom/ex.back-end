const express = require('express');
const database = require('./models/authors')
const app = express();

const PORT = 3000;

app.use(express.json())

app.get('/', async (req, res, next) => {
    const data = await database()
return res.status(200).json(data);
})

app.listen(PORT, () => console.log('seja bem vindoo'))