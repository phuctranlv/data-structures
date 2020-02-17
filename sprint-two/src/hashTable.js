
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

// Let's us insert ant data into the hash table
HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  if (!Array.isArray(this._storage[index])) {
    // debugger;
    var test = Array.isArray(this._storage[index]);
    this._storage[index] = [];
  }
  
  this._storage[index].push([k, v]);
  this._size += 1;
  if ((this._size / this._limit) >= 0.75) {
    this._limit *= 2;
  }
};

// retreives any data that is contained inside the hash table
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage[index];
  var output;
  // debugger;
  container.forEach(tuple => {
    if (tuple[0] === k) {
      output = tuple[1];
    }
  });
  return output;
};

// This function remove is delete a property in object
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  debugger;
  this._storage[index].forEach(tuple => {
    if (tuple[0] === k) {
      tuple[1] = undefined;
    }
  });
  this._size -= 1;
  if ((this._size / this._limit) <= 0.25) {
    this._limit = this._limit / 2;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



