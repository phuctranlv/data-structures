var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstInLine = 0;
  this.lastInLine = 0;
  this.lineLength = 0;
};


Queue.prototype.enqueue = function(value) {
  this.lastInLine += 1;
  this.storage[this.lastInLine] = value;
  this.lineLength = this.lastInLine - this.firstInLine;
};

Queue.prototype.dequeue =  function() {
  if (this.lineLength !== 0) {
    this.firstInLine += 1;
    var output = this.storage[this.firstInLine];
    delete this.storage[this.firstInLine];
    this.lineLength = this.lastInLine - this.firstInLine;
    return output;
  }
};
Queue.prototype.size = function() {
  return this.lineLength;
};