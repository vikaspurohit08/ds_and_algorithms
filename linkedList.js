class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addElementToListAtLast(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const travNode = this.traverseList();
      travNode.next = newNode;
      newNode.next = this.head;
    }
    this.length++;
  }

  removeElementFromLast() {
    let dataRemoved;
    if (this.length === 1) {
      dataRemoved = this.head.data;
      this.head = null;
      this.length--;
    } else {
      const newLastNode = this.traverseList(this.length - 2);
      dataRemoved = newLastNode.next.data;
      this.length--;
      newLastNode.next = this.head;
    }

    return dataRemoved;
  }

  traverseList(endIndex = this.length - 1, everyIterateFunction = (_) => {}) {
    let trav = this.head;
    for (let i = 0; i < endIndex; i++) {
      everyIterateFunction(trav);
      trav = trav.next;
    }
    return trav;
  }

  addElementToStart(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  addElementAtSpecifiedPosition(data, position) {
    if (position > this.length || position < 0) {
      console.log("Cannot add element if position is invalid");
      return;
    }
    if (position === 0) {
      this.addElementToStart(data);
    } else if (position === this.length) {
      this.addElementToListAtLast(data);
    } else {
      const newNode = new Node(data);
      let travNode = this.traverseList(position - 1);
      newNode.next = travNode.next;
      travNode.next = newNode;
      this.length++;
    }
  }

  printList() {
    this.traverseList(this.length, (trav) => {
      console.log(trav.data);
    });
  }
}

const list = new List();
list.addElementToListAtLast(20);
list.addElementToListAtLast(30);
list.addElementToListAtLast(40);
list.addElementToStart(10);
console.log("list5", list.head);
console.log("init");
list.printList();
list.removeElementFromLast();
console.log("final");
list.printList();

module.exports = { List };
