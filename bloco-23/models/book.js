const connection = require('./connection');
const calmeCasebooks = require('./organizeKeys')

const getAllBook = async () => {
    const query = 'SELECT * FROM model_example.books'
    const [data] = await connection.execute(query)
    return data;
}


const findQuery = async (idQuery) => {
const query = 'SELECT * FROM model_example.books'
const [data] = await connection.execute(query, [idQuery])
return data.map(calmeCasebooks.calmeCasebooks).filter(({ authorId }) =>  authorId === Number(idQuery))
}

 module.exports = {
     getAllBook,
     findQuery,
 }