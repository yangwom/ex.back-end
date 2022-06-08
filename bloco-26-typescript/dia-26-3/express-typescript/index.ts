// ./index.ts

import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import BooksRoutes from './routes/books.routes'

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});