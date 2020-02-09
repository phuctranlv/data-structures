var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = {};
  _.extend(someInstance, queueMethods);
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    
    this.storage[this.end] = value;
    this.end += 1;
  },
  dequeue: function () {
    if (this.end - this.start !== 0) {
      console.log(this);
      var output = this.storage[this.start];
      delete this.storage[this.start];
      this.start += 1;
      return output;
    }
  },
  size: function () {
    return this.end - this.start;
  }
};