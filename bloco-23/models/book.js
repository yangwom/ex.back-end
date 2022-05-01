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
    console.log(data)
    return data.map(calmeCasebooks.calmeCasebooks).find((book) => book.id === Number(idParams));
}

 module.exports = {
     getAllBook,
     findQuery,
     findId,
 }