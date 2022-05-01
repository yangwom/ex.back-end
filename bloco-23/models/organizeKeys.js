const organizeKeys = (authors) => ({
    id: authors.id,
    firstName: authors.first_name,
    middleName: authors.middle_name,
    lastName: authors.last_name,
    });

 const calmeCasebooks = ({ id, title, author_id }) => {
        return {
         id,
         title,
         authorId: author_id
         }
     }
     

module.exports = {
organizeKeys,
calmeCasebooks,
};