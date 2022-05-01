const connection = require('./connection')
const organizeKeys = require('./organizeKeys')
const fullNameAuthor = require('./fullnameAuthors');

const getAll = async () => {
    const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    console.log(authors);

    return authors.map(organizeKeys.organizeKeys).map(fullNameAuthor);
}

const findId = async (id) => {
    const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
const [authorsId] = await connection.execute(query, [id])

if(!authorsId.length) return null;

return authorsId.map(organizeKeys).map(fullNameAuthor).find(fullNameAuthor)

}

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName],
);

console.log(create)
module.exports = {
    getAll,
    findId,
    isValid,
    create,
};