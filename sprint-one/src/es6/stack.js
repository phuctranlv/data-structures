class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.position = 0;
  }
  push(value) {
    this.position += 1;
    this.storage[this.position] = value;
  }
  pop() {
    if (this.position > 0) {
      var output = this.storage[this.position];
      delete this.storage[this.position];
      this.position -= 1;
      return output;
    }

  }
  size() {
    return this.position;
  }

}