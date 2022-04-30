const organizeKeys = (authors) => ({
    id: authors.id,
    firstName: authors.first_name,
    middleName: authors.middle_name,
    lastName: authors.last_name,
    });

module.exports = organizeKeys;