var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[position] = value;
    position += 1;
  };

  someInstance.dequeue = function() {
    var currentPositionArray = Object.keys(storage).map(element => Number.parseInt(element));
    var itemToReturn = storage[Math.min(... currentPositionArray)]
    delete storage[Math.min(... currentPositionArray)];
    return itemToReturn;
    
  };

  someInstance.size = function() {
    // debugger;
    var currentPositionArray = Object.keys(storage).map(element => Number.parseInt(element));
    // debugger;
    return currentPositionArray.length;
  };

  return someInstance;
};
var coffee = Queue()
coffee.enqueue('black')