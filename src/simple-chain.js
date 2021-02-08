const CustomError = require("../extensions/custom-error");



const chainMaker = {
  chainBodyArr: [],

  getLength() {
    return this.chainBodyArr.length
  },
  addLink(value) {
    if (value !== undefined) {
      this.chainBodyArr.push(value)
      return this
    } else {
      this.chainBodyArr.push('( )')
      return this
    }

  },
  removeLink(position) {
    let truePosition = position - 1
    if (Number.isInteger(truePosition) && truePosition >= 0 && truePosition < this.chainBodyArr.length - 1) {
      this.chainBodyArr.splice(truePosition, 1)
      return this
    } else {
      this.chainBodyArr = []
      throw new Error('Oops')
    }

  },
  reverseChain() {
    this.chainBodyArr.reverse()
    return this
  },
  finishChain() {
    let resultChainBodyArr = this.chainBodyArr.map(e => `( ${e} )`)
    this.chainBodyArr = []
    return resultChainBodyArr.join('~~')

  }
};

module.exports = chainMaker;
