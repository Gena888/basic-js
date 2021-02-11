const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let stringStr = String(str)

  let repeatTimesNum = options.repeatTimes
  if (repeatTimesNum == undefined) { repeatTimesNum = 1 }
  let separatorStr = options.separator
  if (!separatorStr) { separatorStr = '+' }
  let addition = String(options.addition)
  let additionRepeatTimesNum = options.additionRepeatTimes
  if (additionRepeatTimesNum == undefined) { additionRepeatTimesNum = 1 }
  let additionSeparatorStr = options.additionSeparator
  if (!additionSeparatorStr) { additionSeparatorStr = '|' }

  let addStr = ''

  let resultStr = ''

  if (addition) {
    let addArr = []
    for (let i = 1; i <= additionRepeatTimesNum; i++) {
      addArr.push(addition)
      addArr.push(additionSeparatorStr)
    }
    addArr.pop()
    addStr = addArr.join('')
  }

  if (stringStr) {
    let strArr = []
    for (let j = 1; j <= repeatTimesNum; j++) {
      strArr.push(stringStr)
      if (addStr !== 'undefined') {
        strArr.push(addStr)
      }
      strArr.push(separatorStr)
    }
    strArr.pop()
    resultStr = strArr.join('')
  }

  return resultStr




};
