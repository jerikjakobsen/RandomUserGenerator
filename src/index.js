const emails = require("../data/emailDomains.json")
const ccnyCourses = require("../data/ccnyCourses.json")
const ccnyMajors = require("../data/ccnyMajors.json")
const ccnyClubs = require("../data/ccnyClubs.json")
const firstnames = require("../data/firstNames.json")
const lastNames = require("../data/lastNames.json")
const universitiesAndColleges = require("../data/universitiesAndColleges.json")
const listOfInterests = require("../data/interests.json")
const {sampleWithoutReplacement, mapObjectToProperty, chooseWithProbabilityMap} = require("./helpers.js")

const createRandomUser = () => {
    const firstname = firstnames[Math.floor(Math.random()*firstnames.length)]
    const lastnameObj = lastNames[Math.floor(Math.random()*lastNames.length)]
    const {Rank, Name, Count, ...races} = lastnameObj
    const race = chooseWithProbabilityMap(races)
    const lastname = Name
    const randEmail = emails[Math.floor(Math.random()*emails.length)]
    const email = firstname[0] + lastname.slice(0, 6) + Math.floor(Math.random()*2) + Math.floor(Math.random()*2) + Math.floor(Math.random()*10) + "@" + randEmail
    const college = universitiesAndColleges[Math.floor(Math.random()*universitiesAndColleges.length)]["NAME"]
    const numOfClubs = Math.floor(Math.random()*4)
    const numOfInterests = Math.floor(Math.random()*4) + 1
    const numOfMajors = Math.floor(Math.random()*2) + 1
    const numOfMinors = Math.floor(Math.random()*3)
    const numOfCourses = Math.floor(Math.random()*3) + 3
    const clubs = mapObjectToProperty(sampleWithoutReplacement(numOfClubs, ccnyClubs), "name")
    const interests = sampleWithoutReplacement(numOfInterests, listOfInterests)
    const majors = mapObjectToProperty(sampleWithoutReplacement(numOfMajors, ccnyMajors), "Name")
    const minors = mapObjectToProperty(sampleWithoutReplacement(numOfMinors, ccnyMajors), "Name")
    const courses = mapObjectToProperty(sampleWithoutReplacement(numOfCourses, ccnyCourses), "name")
    return {
        name: firstname + " " + lastname,
        email,
        race,
        college,
        clubs,
        interests,
        majors,
        minors,
        courses
    }
}

const createNRandomUsers = (n) => {
    res = []
    for (let i = 0; i < n; i++) {
        res.push(createRandomUser())
    }
    return res
}

console.log(createNRandomUsers(10))

module.exports = {
    createRandomUser,
    createNRandomUsers
}