// create a class that will represent a full list
class LinkedList {
  constructor(list = []) {
    this.list = list;
  }

  append(value) {
    return this.list.push(value.value);
  }
}

//create a class that will have both a value and a nextNode property

class Node {
  constructor(value = 2, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

const node = new Node();

console.log(list.append(node));
