var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // add method
  // takes input item
  // add item to _storage property object
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // .contains checks if item is present in set
  // takes input string

  // check if input string on property = input string
  if (this._storage[item] === item) {
    return true;
  } else {
    return false;
  }

  // return boolean if above true
};

setPrototype.remove = function(item) {
  // remove: delete item from set
  // input: item
  // no output, just side effect of item being removed

  if (this._storage.hasOwnProperty(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
