/**
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary) => {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < salary.length; i++) {
    if (salary[i] < min) min = salary[i];
    if (salary[i] > max) max = salary[i];
    sum += salary[i];
  }

  return (sum - min - max) / (salary.length - 2);
}

console.log(average([1000,2000,3000])); // 2000
console.log(average([4000,3000,1000,2000])); // 2500
console.log(average([6000,5000,4000,3000,2000,1000])); // 3500
console.log(average([8000,9000,2000,3000,6000,1000])); // 4750
