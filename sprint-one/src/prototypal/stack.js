var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.position = 0;
  return newInstance;
};

var stackMethods = {
  push: function(value) {
    this.position += 1;
    this[this.position] = value;
  },
  pop: function() {
    if (this.position > 0) {
      var output = this[this.position];
      delete this[this.position];
      this.position -= 1;
      return output;
    }

  },
  size: function() {
    return this.position;
  }

};


