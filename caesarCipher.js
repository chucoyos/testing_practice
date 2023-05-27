function caesarCipher(str, shiftBy) {
  // create a function that takes a string and a number
  // shift each letter in the string by the number
  // wrap around the alphabet if necessary
  // keep the same case and punctuation
  // return the new string
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseAlphabet = alphabet.toUpperCase()
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      let index = alphabet.indexOf(str[i])
      let newIndex = (index + shiftBy) % 26
      newStr += alphabet[newIndex]
    } else if (upperCaseAlphabet.includes(str[i])) {
      let index = upperCaseAlphabet.indexOf(str[i])
      let newIndex = (index + shiftBy) % 26
      newStr += upperCaseAlphabet[newIndex]
    } else {
      newStr += str[i]
    }
  }
  return newStr

}

export default caesarCipher