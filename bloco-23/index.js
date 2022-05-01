const express = require('express');
const database = require('./models/authors')
const app = express();

const PORT = 3000;

app.use(express.json())

app.get('/', async (req, res, next) => {
    const data = await database.getAll()
return res.status(200).json(data);
})

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;

    const author = await database.findId(id);

    if (!author) return res.status(404).json({ message: 'Not found' });

    res.status(200).json(author);
});

app.listen(PORT, () => console.log('seja bem vindoo'))