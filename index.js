const emails = require("./emailDomains.json")
const ccnyCourses = require("./ccnyCourses.json")
const ccnyMajors = require("./ccnyMajors.json")
const ccnyClubs = require("./ccnyClubs.json")
const firstnames = require("./firstNames.json")
const lastNames = require("./lastNames.json")
const universitiesAndColleges = require("./universitiesAndColleges.json")
const listOfInterests = require("./interests.json")

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

const sampleWithoutReplacement = (numberOfSamples, list) => {
    copyList = [...list]
    // Shuffle List randomly n times
    // Return first numberOfSamples elements
    if (numberOfSamples === 0) {
        return []
    }

    for (let i = 0; i < copyList.length; i++) {
        randI = Math.floor(Math.random()*copyList.length)
        randJ = Math.floor(Math.random()*copyList.length)
        t = copyList[randJ]
        copyList[randJ] = copyList[randI]
        copyList[randI] = t
    }
    return copyList.slice(0, numberOfSamples)
}
const mapObjectToProperty = (list, property) => {
    return list.map((val) => {
        return val[property]
    })
}

const chooseWithProbabilityMap = (pMap) => {
    var probabilityArray = Object.keys(pMap).map((key) => [String(key), Number(pMap[key].slice(0,pMap[key].length-1))])
    const compare = (a, b) => {
        aProb = a[1]
        bProb = b[1]
        if ( aProb < bProb ){
            return -1;
          }
          if ( aProb > bProb ){
            return 1;
          }
          return 0;
    }
    sorted = probabilityArray.sort(compare)
    rand = Math.floor(Math.random()*101)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i][1] > rand) {
            return sorted[i][0]
        }
    }
    return sorted[sorted.length-1][0]
}

console.log(createNRandomUsers(5))

module.exports = {
    createRandomUser,
    createNRandomUsers
}