const express = require('express');
const router = require('./routers/')
const {  Book } = require('./models/')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);


app.use((err, req, res, next) => {
if(err.status) return res.status(err.status).json({ message: err.message });
return res.status(500).json({ message: err.message })
});
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));