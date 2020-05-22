/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {

  if (x > -10 && x < 10 ) return x;

  let chars = Math.abs(x).toString().split('');
  let start = 0;
  let end = chars.length - 1;
  let response;

  while (start < end) {
    const temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;
    start++;
    end--;
  }

  response = chars.join('');
  response = x < 0 ? -response : +response;

  if (response < -(2**31) || response > (2**31) - 1) return 0;

  return response;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
