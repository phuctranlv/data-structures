
// Instantiate a new graph
var Graph = function() {
  // create a property on the new instance for storage
  this._storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // add a new node (obj) in _storage
  this._storage[value] = {
    value: value,
    pointTo: {}
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  // check if the entire storage has this value somewhere
  if (this._storage[value] && this._storage[value].value === value) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if node is inside graph
  if (this._storage[node]) {
    // delete the node
    var referencedNodes = this._storage[node].pointTo;
    for (var key in referencedNodes) {
      delete this._storage[key].pointTo[node];
    }
    delete this._storage[node];
  }


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this._storage[fromNode].pointTo[toNode] && this._storage[toNode].pointTo[fromNode]) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // takes in the value of two nodes
  // change in pointTo value
  this._storage[fromNode].pointTo[toNode] = toNode;
  // connects the two nodes
  this._storage[toNode].pointTo[fromNode] = fromNode;


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Get into the pointsTo array in each node
  // Check if array in each node contains the pointer value
  // if they contain pointer value slice or splice it from the array
  if (this._storage[fromNode].pointTo[toNode] && this._storage[toNode].pointTo[fromNode]) {
    delete this._storage[fromNode].pointTo[toNode];
    delete this._storage[toNode].pointTo[fromNode];
  }

  // do the same the other side

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over all keys in storage
  // call the function with all keys as an argument

  for (var key in this._storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var graph = new Graph();


