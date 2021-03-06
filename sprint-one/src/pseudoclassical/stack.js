var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.position = 0;
};

Stack.prototype.push = function(value) {
  this.position += 1;
  this.storage[this.position] = value;
};

Stack.prototype.pop = function() {
  if (this.position !== 0) {
    var output = this.storage[this.position];
    delete this.storage[this.position];
    this.position -= 1;
    return output;
  }

};

Stack.prototype.size = function() {
  return this.position;
};
