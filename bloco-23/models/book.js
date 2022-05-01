const connection = require('./connection');
const calmeCasebooks = require('./organizeKeys')

const getAllBook = async () => {
    const query = 'SELECT * FROM model_example.books'
    const [data] = await connection.execute(query)
    return data;
}


const findQuery = async (idQuery) => {
const query = 'SELECT * FROM model_example.books WHERE author_id = ?'
const [ data ] = await connection.execute(query, [idQuery])
return data.map(calmeCasebooks.calmeCasebooks).filter(({ authorId }) =>  authorId === Number(idQuery))
}


const findId = async (idParams) => {
    const query = 'SELECT * FROM model_example.books WHERE id = ?'
    const [ data ] = await connection.execute(query, [idParams])
    return data.map(calmeCasebooks.calmeCasebooks).find((book) => book.id === Number(idParams));
}

const createBook = async (title, authorId) => {
const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?,?) '
return await connection.execute(query, [title, authorId]);
}

 module.exports = {
     getAllBook,
     findQuery,
     findId,
     createBook,
 }