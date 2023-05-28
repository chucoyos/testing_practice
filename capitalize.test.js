import capitalize from "./capitalize";
describe('capitalize', () => {
  it('returns a capitalized text', () => {
    expect(capitalize('house')).toBe('House')
  })
  it('returns a capitalized text', () => {
    expect(capitalize('HOUSE')).toBe('House')
  })
  it('returns a capitalized text', () => {
    expect(capitalize('hOuSe')).toBe('House')
  })
  it('returns a capitalized text', () => {
    expect(capitalize('hOuSe')).toBe('House')
  })
})