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


  // we need to create a new object or node with the property of the value that was passed in
  let childNode = {value: value,
    children: []};

  // we need to somehow extend the property methods of our original tree to our child node/ objects
  _.extend(childNode, treeMethods);
  this[value] = childNode;

  // we need to push that value to the children property on our tree "which is an array"
  let name = this[value];
  this.children.push(name);






};

treeMethods.contains = function(target) {
  // Constains method
  // that takes any input
  // and returns a boolean
  // for whether or not it's value is contained in the whole tree

  // most likely a recursive function

  //check for value in original tree
  let isContained = false;
  // create helper function that takes node as argument
  let checkForTarget = function (node) {
    // create if statement comparing the target to the node's value
    if (node[target] && node[target].value === target) {
      isContained = true;
      return isContained;
    }
    // create for loop to iterate through node's children array
    for (var i = 0; i < node.children.length; i++) {
      // pass each "child" node back into our helper function
      checkForTarget(node.children[i]);
    }
    return isContained;
  };
  isContained = checkForTarget(this);
  // return false if no value is found
  return isContained;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
