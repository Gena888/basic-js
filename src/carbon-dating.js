const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
let result = 0

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' | sampleActivity !== NaN | sampleActivity !== null) { return false }

  let sampleActivityNum = Number(sampleActivity)

  if (sampleActivityNum == NaN | sampleActivityNum == undefined | sampleActivityNum < 0) {
    return false
  } else {
    let k = 0.693/HALF_LIFE_PERIOD
    let t = (Math.log(MODERN_ACTIVITY/sampleActivity))/k
    result = Math.ceil(t)
    return result
  }


};
