var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastNumberIn = 0;
  var firstNumberIn = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastNumberIn] = value;
    lastNumberIn += 1;
  };

  someInstance.dequeue = function() {
    var itemToReturn = storage[firstNumberIn];
    delete storage[firstNumberIn];
    if ((lastNumberIn - firstNumberIn) > 0) {
      firstNumberIn += 1;
    }
    return itemToReturn;
    
  };

  someInstance.size = function() {
    return lastNumberIn - firstNumberIn;
  };

  return someInstance;
};