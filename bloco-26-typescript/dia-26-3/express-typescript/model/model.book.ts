import connection from "./connection";
import Book from "../interfaces/interfacer";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export default {
  async getAll() {

    const query: string = "SELECT * FROM books";

    const [result] = await connection.execute<RowDataPacket[]>(query);

    return result;
  },

  async create(book:Book): Promise<Book> {

    const query: string = 'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)';

    const { title, price, author, isbn } = book;
    
    const [result] = await connection.execute<ResultSetHeader>(query,[title, price, author, isbn]);

    return { id: result.insertId, ...book }
  }
};
