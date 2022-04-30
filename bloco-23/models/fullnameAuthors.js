const getNewauthor = ({ id, firstName, middleName, lastName }) => {
    const fullName = [firstName, middleName, lastName ].filter(Boolean).join(" ")
    console.log(fullName)
    return {
        id,
        firstName,
        middleName,
        lastName,
        fullName,
    }
    
    }

    module.exports = getNewauthor;