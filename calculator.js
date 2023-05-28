const calculator = (function() {
  const add = (a, b) => {
    // calculates the sum of two numbers including negative numbers and strings
    return Number(a) + Number(b)
  }
  const subtract = ((a, b) => {
    return Number(a) - Number(b)
  })
  const divide = (a, b) => {
    return Number(a) / Number(b)
  }
  const multiply = (a, b) => {
    return Number(a) * Number(b)
  }
  return {
    add,
    subtract,
    divide,
    multiply
  }
})()

export default calculator