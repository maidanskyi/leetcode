/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {

  let response = '';
  const length = Math.max(a.length, b.length);
  let inMind = 0;

  for (let i = 0;  i < length; i++) {

    let sum;

    if (!a[a.length - 1 - i]) {
      sum = Number(b[b.length - 1 - i]) + inMind;
    } else if (!b[b.length - 1 - i]) {
      sum = Number(a[a.length - 1 - i]) + inMind;
    } else {
      sum = Number(a[a.length - 1 - i]) + Number(b[b.length - 1 - i]) + inMind;
    }

    switch (sum) {
      case 0:
        response = `${0}${response}`;
        break;
      case 1:
        response = `${1}${response}`;
        inMind = 0;
        break;
      case 2:
        response = `${0}${response}`;
        inMind = 1;
        break;
      case 3:
        response = `${1}${response}`;
        inMind = 1;
        break;
    }
  }

  return inMind ? `${inMind}${response}` : response;

}

console.log(addBinary('11', '1')) // 100
console.log(addBinary('1010', '1011')) // 10101
