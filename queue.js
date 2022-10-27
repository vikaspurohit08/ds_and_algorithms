const { List } = require("./linkedList");

class Queue {
  constructor() {
    this.list = new List();
  }

  enqueue(data) {
    this.list.addElementToStart(data);
  }

  dequeue() {
    if (this.empty()) {
      console.log("Cannot remove element as queue is empty");
    } else {
      const dataRemoved = this.list.removeElementFromLast();
      console.log("Removed element", dataRemoved);
      return dataRemoved;
    }
  }

  empty() {
    return this.list.length <= 0;
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();

module.exports = { Queue };
