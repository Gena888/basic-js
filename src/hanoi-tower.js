const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resultObj = {
    turns: 0,
    seconds: 0
  }
  let needTurns = Math.pow(2, disksNumber) - 1

  let TurnsPerSec = turnsSpeed / 3600
  let needSec = Math.floor(needTurns / turnsSpeed * 3600)



  resultObj.turns = Number(needTurns)
  resultObj.seconds = Number(needSec)
  return resultObj
};
