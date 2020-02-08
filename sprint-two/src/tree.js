var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // input: value
  // side effect: add a new node that has the property value


  // create an array for all of the names of our original tree's children

  // we need to create a new object or node with the property of the value that was passed in

  // we need to push that value to the children property on our tree "which is an array"
  let childNode = {value: value,
    children: []};
  _.extend(childNode, treeMethods);
  this[value] = childNode;
  let name = this[value];
  this.children.push(name);

  // we need to somehow extend the property methods of our original tree to our child node/ objects

};

treeMethods.contains = function(target) {
  
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
