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

console.log(list.size());
