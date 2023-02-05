const {
    generateEmail,
    generateClubs,
    generateCollege,
    generateCourses,
    generateInterests,
    generateFirstname,
    generateLastNameAndRace,
    generateMajors,
    generateSexualOrientation,
    generateGender,
    generateGPA,
    generateYear,
    generatePassword
} = require("./generators.js")

const createRandomUser = () => {
    const firstname = generateFirstname()
    const {lastname, race} = generateLastNameAndRace()

    return {
        name: firstname + " " + lastname,
        race,
        email: generateEmail(firstname, lastname),
        college: generateCollege(),
        clubs: generateClubs(0, 3),
        interests: generateInterests(1, 7),
        majors: generateMajors(1,2),
        minors: generateMajors(0,2),
        courses: generateCourses(3, 6),
        gender: generateGender(),
        sexualOrientation: generateSexualOrientation(),
        gpa: generateGPA(),
        year: generateYear(),
        password: generatePassword(firstname, lastname)
    }
}

const createNRandomUsers = (n) => {
    res = []
    for (let i = 0; i < n; i++) {
        res.push(createRandomUser())
    }
    return res
}

module.exports = {
    createRandomUser,
    createNRandomUsers
}