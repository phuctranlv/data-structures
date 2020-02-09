var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.firstInLine = 0;
  someInstance.lastInLine = 0;
  someInstance.lineLength = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.lastInLine += 1;
    debugger;
    this.storage[this.lastInLine] = value;
    this.lineLength = this.lastInLine - this.firstInLine;
  },
  dequeue: function() {
    if (this.lineLength !== 0) {
      this.firstInLine += 1;
      var output = this.storage[this.firstInLine];
      delete this.storage[this.firstInLine];
      this.lineLength = this.lastInLine - this.firstInLine;
      return output;
    }

  },
  size: function() {
    return this.lineLength;
  }
};


