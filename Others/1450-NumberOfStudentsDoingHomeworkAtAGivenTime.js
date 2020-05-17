/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = (startTime, endTime, queryTime) => {

  let response = 0;

  for (let i = 0; i < startTime.length; i++) {
    response += startTime[i] <= queryTime && queryTime <= endTime[i] ? 1 : 0;
  }

  return response;

}

console.log(busyStudent([1,2,3], [3,2,7], 4)); // 1
console.log(busyStudent([4], [4], 4)); // 1
console.log(busyStudent([4], [4], 5)); // 1
console.log(busyStudent([1,1,1,1], [1,2,3,4], 7)); // 0
