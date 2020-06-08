/**
 * @param {string} homepage
 */
class BrowserHistory {

  constructor(homepage) {
    this.history = [homepage];
    this.pointer = 0;
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    this.pointer++;
    this.history.length = this.pointer;
    this.history.push(url);
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    if (this.pointer - steps < 0)
      this.pointer = 0;
    else
      this.pointer -= steps;

    return this.history[this.pointer];
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    if (this.pointer + steps > this.history.length - 1)
      this.pointer = this.history.length - 1;
    else
      this.pointer += steps;

    return this.history[this.pointer];
  }

}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
