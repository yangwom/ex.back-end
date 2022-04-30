const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json())

app.get('/', (req, res, next) => {
return res.status(200).json({ message: 'bora exercitar' });
})

app.listen(PORT, () => console.log('seja bem vindoo'))