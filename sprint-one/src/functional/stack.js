var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    position += 1;
    storage[position] = value;
  };

  someInstance.pop = function() {
    var positionArray = Object.keys(storage).map(element => Number.parseInt(element));
    var highestValue = Math.max(... positionArray);
    var popItem = storage[highestValue];
    delete storage[highestValue];
    return popItem;
  };

  someInstance.size = function() {
    var keysArray = Object.keys(storage);
    return keysArray.length;
  };

  return someInstance;
};
