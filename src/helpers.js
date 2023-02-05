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

module.exports = {
    sampleWithoutReplacement,
    mapObjectToProperty,
    chooseWithProbabilityMap
}