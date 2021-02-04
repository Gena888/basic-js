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
    let firstChar = namesArr[n].charAt(0)
    while (firstChar == ' ') {
      let i = 0
      firstChar = namesArr[n].charAt(i)
      i++
    }
    lettersArr.push(firstChar)
  }

  sortedLettersArr = lettersArr.sort()
  result = sortedLettersArr.join('')
  return result

};
