const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirectMachine) {
    this.isDirectMachine = isDirectMachine
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.square = []
  }

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i)
      row += this.alphabet.slice(0, i)
      this.square.push(row)
    }
  }

  getSquare() {
    return this.square
  }

  repeatString(key, message) {
    let resultString = "";
    let keyLength = key.length;
    let it = 0;

    for (let i = 0; i < message.length; i++) {
      if (it % keyLength === 0) {
        it = 0;
      }
      if (this.alphabet.indexOf(message[i]) >= 0) {
        resultString += key[it];
        it++;
      } else {
        resultString += message[i];
      }
    }
    return resultString;
  }

  encrypt(message, key) {
    if (!message || !key) { throw new Error('message or key is not passed') } else {
      if (this.isDirectMachine === false) {
        // reverse mashine
        let arr = message.split('')
        let revArr = arr.reverse()
        let result = revArr.join('')
        return result

      } else {
        // DirectMachine
        let upperMessage = message.toUpperCase()
        let upperKey = key.toUpperCase()
        let encryptMessage = "";
        let upperNewKey = this.repeatString(upperKey, upperMessage);
        this.generateSquare();

        for (let it = 0; it < upperMessage.length;) {
          if (this.alphabet.indexOf(upperMessage[it]) >= 0) {
            // Индекс строки равный символу сообщения
            let i = this.alphabet.indexOf(upperMessage[it]);
            // Индекс колонки равный символу ключа
            let j = this.alphabet.indexOf(upperNewKey[it]);
            // Зашифрованный символ равный пересечению индекса строки и колонки
            encryptMessage += this.square[i][j];
            it++
          } else {
            encryptMessage += upperMessage[it]
            it++
          }
        }
        return encryptMessage;
      }
    }
  }
  decrypt(encryptedMess, key) {
    if (!encryptedMess || !key) { throw new Error('message or key is not passed') } else {
      if (this.isDirectMachine === false) {
        // reverse mashine
        let arr = encryptedMess.split('')
        let revArr = arr.reverse()
        let result = revArr.join('')
        return result

      } else {
        // DirectMachine
        let upperMessage = encryptedMess.toUpperCase()
        let upperKey = key.toUpperCase()
        let decryptMessage = "";
        let upperNewKey = this.repeatString(upperKey, upperMessage);
        this.generateSquare();

        for (let it = 0; it < upperMessage.length; it++) {
          // Берем символ ключа и ищем индекс строки с данным символом
          if (this.alphabet.indexOf(upperMessage[it]) >= 0) {
            let i = this.alphabet.indexOf(upperNewKey[it]);
            let j = this.square[i].indexOf(upperMessage[it]);
            decryptMessage += this.alphabet[j];
          } else {
            decryptMessage += upperMessage[it]
          }
        }
        return decryptMessage;
      }
    }
  }
}

module.exports = VigenereCipheringMachine;

