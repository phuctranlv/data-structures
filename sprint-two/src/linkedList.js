var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // making a new node "invoke our node function"
    var newNode = Node(value);
    // add the new node to the list object
    debugger;
    if (!newAddress) {
      var newAddress = 0;
    }
    newAddress += 1;
    list[newAddress] = newNode;
    // update the lable that says tail to point to the newely created node "node.next"
    if (list.tail) {
      list.tail.next = newAddress; // updating the next property inside of the old node
    }
    // update the old tail to point to the new tail
    list.tail = newNode;


  };

  list.removeHead = function() {
  };

  list.contains = function(target) {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//  var something = LinkedList() ---> {}