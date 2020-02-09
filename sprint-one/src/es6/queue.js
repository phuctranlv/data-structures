class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.firstInLine = 0;
    this.lastInLine = 0;
    this.lineLength = 0;
  }
  enqueue(value) {
    this.lastInLine += 1;
    this.storage[this.lastInLine] = value;
    this.lineLength = this.lastInLine - this.firstInLine;
  }
  dequeue() {
    if (this.lineLength !== 0) {
      this.firstInLine += 1;
      var output = this.storage[this.firstInLine];
      delete this.storage[this.firstInLine];
      this.lineLength = this.lastInLine - this.firstInLine;
      return output;
    }

  }
  size () {
    return this.lineLength;
  }

}
