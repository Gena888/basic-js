const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = []
  let result = 0

  for (i = 0; i <= matrix.length - 1; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == '^^') {
        arr.push(j)
      }
    }
  }

  result = arr.length
  return result === 0 ? 0 : result

};
