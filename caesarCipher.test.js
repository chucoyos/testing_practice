import caesarCipher from "./caesarCipher";

describe('caesarCipher shift', () => {
  it('Returns a Caesar shifted string', () => {
    expect((caesarCipher('hello', 1))).toBe('ifmmp')
  })
})