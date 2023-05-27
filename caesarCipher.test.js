import caesarCipher from "./caesarCipher";

describe('caesarCipher shift', () => {
  it('Returns a Caesar shifted string by 1', () => {
    expect((caesarCipher('hello', 1))).toBe('ifmmp')
  })
  it('Returns a Caesar shifted string by 3', () => {
    expect((caesarCipher('hello', 3))).toBe('khoor')
  })
  it('Returns a Caesar shifted string by 5', () => {
    expect((caesarCipher('hello', 5))).toBe('mjqqt')
  })
  it('Returns a Caesar shifted string by 6', () => {
    expect((caesarCipher('zoop', 6))).toBe('fuuv')
  })
  it('Returns a Caesar shifted string by 26', () => {
    expect((caesarCipher('hello', 26))).toBe('hello')
  })
  it('Returns a Caesar shifted string by 27', () => {
    expect((caesarCipher('hello', 27))).toBe('ifmmp')
  })
  it('Returns a Caesar shifted string by 6 with punctuation', () => {
    expect((caesarCipher('hello!', 6))).toBe('nkrru!')
  })
  it('Returns a Caesar shifted string by 6 with capital letters', () => {
    expect((caesarCipher('Hello!', 6))).toBe('Nkrru!')
  })
})