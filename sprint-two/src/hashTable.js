
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Let's us insert ant data into the hash table
HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

// retreives any data that is contained inside the hash table
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var output = this._storage.get(index);
  return output;
};

// This function remove is delete a property in object
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



