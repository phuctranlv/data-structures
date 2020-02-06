var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = {};
  newObj['lastPropertyKey'] = 0;
  _.extend(newObj, stackMethods);
  return newObj;
};

var stackMethods = {
  push: function(value) {
    this.lastPropertyKey += 1;
    debugger;
    this[this.lastPropertyKey] = value;
  },
  pop: function() {
    var outputValue = this[this.lastPropertyKey];
    delete this[this.lastPropertyKey];
    if (this.lastPropertyKey > 0) {
      this.lastPropertyKey -= 1;
    }
    return outputValue;
  },
  size: function() {
    return this.lastPropertyKey;
  }
};

var plates = Stack();
plates.push('china plate');
