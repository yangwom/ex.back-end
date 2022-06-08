import connection from "./connection";
import Book from "../interfaces/interfacer";

const getAll = async (): Promise<Book[]> =>  {
    const query: string = 'SELECT * FROM books'

    const [result] = await connection.execute(query)

    return result as Book[];
}