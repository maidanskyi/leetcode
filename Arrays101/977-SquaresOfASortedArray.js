/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortedSquares = (arr) => {

  if (!arr.length) return arr;

  return arr.map(el => el * el).sort((a, b) => a - b);

}

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]
console.log(sortedSquares([-7,-5,-3,-2,-1,0])); // [0,1,4,9,25,49]
console.log(sortedSquares([0,1,2,3,11])); // [0,1,4,9,121]
