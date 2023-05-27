import analyzeArray from "./analyzeArray";
describe('analyzeArray', () => {
  it('should return an object with the correct properties', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object).toHaveProperty('average');
    expect(object).toHaveProperty('min');
    expect(object).toHaveProperty('max');
    expect(object).toHaveProperty('length');

  });
  it('should return an object with the correct values', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
     
  });
});