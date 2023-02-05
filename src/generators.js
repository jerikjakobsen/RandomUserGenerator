const emails = require("../data/emailDomains.json")
const ccnyCourses = require("../data/ccnyCourses.json")
const ccnyMajors = require("../data/ccnyMajors.json")
const ccnyClubs = require("../data/ccnyClubs.json")
const firstnames = require("../data/firstNames.json")
const lastNames = require("../data/lastNames.json")
const universitiesAndColleges = require("../data/universitiesAndColleges.json")
const listOfInterests = require("../data/interests.json")
const sexualOrientations = require("../data/sexualOrientations.json")
const genders = require("../data/genders.json")
const {sampleWithoutReplacement, mapObjectToProperty, chooseWithProbabilityMap} = require("./helpers.js")


const generateEmail = (firstname, lastname) => {
    const randEmail = emails[Math.floor(Math.random()*emails.length)]
    return firstname[0] + lastname.slice(0, 6) + Math.floor(Math.random()*2) + Math.floor(Math.random()*2) + Math.floor(Math.random()*10) + "@" + randEmail
}

const generateFirstname = () => {
    return firstnames[Math.floor(Math.random()*firstnames.length)]
}

const generateLastNameAndRace = () => {
    const lastnameObj = lastNames[Math.floor(Math.random()*lastNames.length)]
    const {Rank, Name, Count, ...races} = lastnameObj
    let race = chooseWithProbabilityMap(races)
    if (race === "AIAN") {
        race = "ASIAN"
    }
    return {
        lastname: Name,
        race
    }
}

const generateCollege = () => {
    return universitiesAndColleges[Math.floor(Math.random()*universitiesAndColleges.length)]["NAME"]
}

const generateClubs = (minNumOfClubs, maxNumOfClubs) => {
    const numOfClubs = Math.floor(Math.random()*maxNumOfClubs) + minNumOfClubs
    return mapObjectToProperty(sampleWithoutReplacement(numOfClubs, ccnyClubs), "name")
}

const generateInterests = (minNumOfInterests, maxNumOfInterests) => {
    const numOfInterests = Math.floor(Math.random()*maxNumOfInterests) + minNumOfInterests
    return sampleWithoutReplacement(numOfInterests, listOfInterests)
}

const generateMajors = (minNumOfMajors, maxNumOfMajors) => {
    const numOfMajors = Math.floor(Math.random()*maxNumOfMajors) + minNumOfMajors
    return mapObjectToProperty(sampleWithoutReplacement(numOfMajors, ccnyMajors), "Name")
}

const generateCourses = (minNumOfCourses, maxNumOfCourses) => {
    const numOfCourses = Math.floor(Math.random()*maxNumOfCourses) + minNumOfCourses
    return mapObjectToProperty(sampleWithoutReplacement(numOfCourses, ccnyCourses), "name")
}

const generateSexualOrientation = () => {
    return sexualOrientations[Math.floor(Math.random()*sexualOrientations.length)]
}

const generateGender = () => {
    return genders[Math.floor(Math.random()*genders.length)]
}

const generateGPA = () => {
    const rand = Math.floor(Math.random()*101)
    let base = 0
    if (rand > 60) {
        base = 3
    } else if (rand > 20) {
        base = 2
    } else {
        base = 1
    }
    return Math.floor(Math.random()*100)/100 + base
}

const generateYear = () => {
    return Math.floor(Math.random()*10) + 1
}

const generatePassword = (firstname, lastname) => {
    return firstname+lastname
}

module.exports = {
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
}