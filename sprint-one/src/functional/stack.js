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
    var popItem = storage[position];
    delete storage[position];
    if (position > 0) {
      position -= 1;
    }
    return popItem;
  };

  someInstance.size = function() {
    return position;
  };

  return someInstance;
};
