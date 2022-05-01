const express = require('express');
const database = require('./models/authors')
const databook = require('./models/book')
const app = express();

const PORT = 3000;

app.use(express.json())

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!database.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await database.create(first_name, middle_name, last_name);

   return res.status(201).json({ message: 'Autor criado com sucesso! '});
});

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

app.get('/books', async (req, res) => {
    const { author } = req.query
    console.log(author);
 const dataBook  = await databook.findQuery(author)
return res.status(200).json(dataBook)
})




app.listen(PORT, () => console.log('seja bem vindoo'))