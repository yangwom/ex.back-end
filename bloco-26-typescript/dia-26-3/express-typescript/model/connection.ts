// ./models/connection.ts

import mysql from 'mysql2/promise'; // instalar mysql2 e dotenv


const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'books_api'});

export default connection;