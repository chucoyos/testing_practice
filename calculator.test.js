import calculator from "./calculator";

describe('calculator module', () => {
  it('calculates the sum of two numbers', () => {
    expect((calculator.add(2, 4))).toBe(6)
  })
  it('calculates the subtraction of two numbers', () => {
    expect((calculator.subtract(8, 4))).toBe(4)
  })
  it('calculates the division of two numbers', () => {
    expect((calculator.divide(8, 4))).toBe(2)
  })
  it('calculates the multiplication of two numbers', () => {
    expect((calculator.multiply(4, 5))).toBe(20)
  })
})