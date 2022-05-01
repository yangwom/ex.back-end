const getNewauthor = ({ id, firstName, middleName, lastName }) => {
    const fullName = [firstName, middleName, lastName ].map((data) => data).join(" ")
    return {
        id,
        firstName,
        middleName,
        lastName,
        fullName,
    }
    
    }

    module.exports = getNewauthor;