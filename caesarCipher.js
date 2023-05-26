function caesarCipher(str, shiftBy) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    let newCharCode = charCode + shiftBy
    result += String.fromCharCode(newCharCode)
  }
  return result
}

export default caesarCipher