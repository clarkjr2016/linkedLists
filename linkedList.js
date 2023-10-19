// create a class that will represent a full list
class LinkedList {
  constructor(list = []) {
    this.list = list;
  }

  append(value) {
    this.list.push(value.value);
  }

  prepend(value) {
    this.list.unshift(value.value);
  }

  size() {
    return this.list.length;
  }

  head() {
    return this.list[0];
  }

  tail() {
    return this.list[this.list.length - 1];
  }

  at(index) {
    const node = this.list.splice(index, 1);
    return node[0];
  }

  pop() {
    this.list.pop();
  }

  contains(value) {
    //gonna use a linear search because these items won't be sorted
    //create a copy of the array so that the original won't be bothered
    const copy = this.list.splice(0);
    while (copy.length > 0) {}
  }
}

//create a class that will have both a value and a nextNode property

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

const node1 = new Node(1);

const node2 = new Node(2);
