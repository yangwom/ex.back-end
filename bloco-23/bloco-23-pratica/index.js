const express = require('express');
const errorMiddleware = require('./api/middleware/errorMiddleware');
const router = require('./api/routers/index');

const app = express();

app.use(express.json());

const PORT = 3000;
app.use(router);
app.use(errorMiddleware);

app.listen(PORT, ()=> console.log(`ouvindo na porta ${PORT}`));