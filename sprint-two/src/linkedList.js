var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.newAddress = 0;
  list.headAddress = 0;

  list.addToTail = function(value) {
    // making a new node "invoke our node function"
    var newNode = Node(value);
    // add the new node to the list object
    if (!this.newAddress) {
      var isThisTheVeryFirstNode = true;

    }


    this.newAddress += 1;
    this[this.newAddress] = newNode;
    // update the lable that says tail to point to the newely created node "node.next"
    if (list.tail) {
      this.tail.next = this.newAddress; // updating the next property inside of the old node
    }
    // update the old tail to point to the new tail
    this.tail = newNode;
    if (isThisTheVeryFirstNode) {
      this.headAddress = this.newAddress;
      this.head = newNode;
      isThisTheVeryFirstNode = false;
    }
  };

  list.removeHead = function() {
    // The purpose of this function is to remove the first node in our linked list instance

    // The first node will have a property of 1 if is the first property being removed all subsequent nodes being removed will have incremented values from 1

    // we don't need to re-assign names for our properties

    // set variable to equal the value of the current head node that we are going to delete
    let output = list.head.value;
    // Set list.head to reference the value of node.next in the current head node
    var nextHeadAddress = this.head.next;
    // delete first node in the list

    delete this[this.headAddress];
    // * we need to delete the original head object inside the list object *

    // set new head
    this.head = list[nextHeadAddress];
    // return the variable that contains the deleted value
    return output;

  };

  list.contains = function(target) {
    // create a function that returns a boolean if a certain value is contained in our linked list

    // we're going to take a target input and for loop through our linked list property

    // we are going to compare if our target input is equal to our nodes.value property
    for (var key in this) {
      if (this[key].value === target) {
        return true;
      }
    }
    return false;
    // return true if the comparison is true

    // else return false


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