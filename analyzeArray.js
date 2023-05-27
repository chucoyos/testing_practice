function analyzeArray(array) {
  const average = array.reduce((a, b) => a + b) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return { average, min, max, length };
}


const object = analyzeArray([1,8,3,4,2,6]);
object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};
export default analyzeArray;