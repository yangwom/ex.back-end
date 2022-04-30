const connection = require('./connection')
const organizeKeys = require('./organizeKeys')
const fullNameAuthor = require('./fullnameAuthors');

const getAll = async () => {
    const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors.map(organizeKeys).map(fullNameAuthor);
}


module.exports = getAll;