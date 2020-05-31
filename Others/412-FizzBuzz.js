  /**
   * @param {number} n
   * @return {string[]}
   */
  const fizzBuzz = (n) => {

    const response = [];

    for (let i = 1; i <= n; i++ ) {
      if (i % 3 === 0 && i % 5 === 0)
        response.push('FizzBuzz');
      else if (i % 3 === 0)
        response.push('Fizz');
      else if (i % 5 === 0)
        response.push('Buzz');
      else
        response.push(`${i}`);
    }

    return response;

  }

console.log(fizzBuzz(15));
