const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('You shoud give me array, please :) ')
  } else if (arr.length === 0) {
    return arr
  };
  let trArr = arr.map(i => i)

  for (let i = 0; i < trArr.length; i++) {

    switch (trArr[i]) {
      case '--discard-next':
        if (i === trArr.length - 1) {
          trArr.splice(i, 1)
          break;
        }
        if (trArr[i + 2] === '--double-prev' || trArr[i + 2] === '--discard-prev') {
          trArr.splice(i, 3)
          break;
        }
        trArr.splice(i, 2)
        i--;
        break;
      case '--discard-prev':
        if (i === 0) {
          trArr.splice(i, 1)
          break;
        }
        trArr.splice(i - 1, 2)
        i--;
        break;
      case '--double-next':
        if (i === trArr.length - 1) {
          trArr.splice(i, 1)
          break;
        }
        trArr.splice(i, 1, trArr[i + 1])
        break;
      case '--double-prev':
        if (i === 0) {
          trArr.splice(i, 1)
          break;
        }
        trArr.splice(i, 1, trArr[i - 1])
        break;
    }
  }

  return trArr
};
