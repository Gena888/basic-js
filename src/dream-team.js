const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let namesArr = []
  let lettersArr = []
  let sortedLettersArr = []
  let result = ''

  for (m = 0; m < members.length; m++) {
    if (typeof members[m] == 'string') {
      namesArr.push(members[m].toUpperCase())
    }
  }

  for (n = 0; n < namesArr.length; n++) {
    let inNameLettersArr = []
    for (i = 0; i < namesArr[n].length; i++) {
      if (namesArr[n][i] !== ' ') {
        inNameLettersArr.push(namesArr[n][i])
      }
    }
    lettersArr.push(inNameLettersArr[0])
  }

  sortedLettersArr = lettersArr.sort()
  result = sortedLettersArr.join('')
  return result

};
