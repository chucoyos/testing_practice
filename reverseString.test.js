import reverseString from "./reverseString"
describe('reverseString', () => {
  it('returns a reversed string', () => {
    expect(reverseString('huston')).toBe('notsuh')
  })
  it('returns a reversed string', () => {
    expect(reverseString('zoom')).toBe('mooz')
  })
  it('returns a reversed string with spaces', () => {
    expect(reverseString('zoom zoom')).toBe('mooz mooz')
  })
  it('returns a reversed string with numbers', () => {
    expect(reverseString('123')).toBe('321')
  })
  it('returns a reversed string with special characters', () => {
    expect(reverseString('!@#$')).toBe('$#@!')
  })
})