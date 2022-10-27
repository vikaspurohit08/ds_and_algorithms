class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addElementAtLast(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let trav = this.head;
      while (trav.next) {
        trav = trav.next;
      }
      trav.next = newNode;
    }
  }

  printList() {
    let trav = this.head;
    if (!trav) {
      return;
    }

    do {
      console.log(trav.val);
      trav = trav.next;
    } while (trav.next);
  }
}

class HeapNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Heap {
  sortedHeap = [];
  linkedList = new LinkedList();
  constructor() {
    this.head = null;
  }

  addElementToHeap(data) {
    const newNode = new HeapNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let travNode = this.head;
      while (travNode.left || travNode.right) {
        if (data < travNode.data) {
          if (travNode.left) {
            travNode = travNode.left;
          } else {
            break;
          }
        } else {
          if (travNode.right) {
            travNode = travNode.right;
          } else {
            break;
          }
        }
      }
      if (data < travNode.data) {
        travNode.left = newNode;
      } else {
        travNode.right = newNode;
      }
    }
  }

  inOrderTraversalToList() {}

  inOrderTraversal(node = this.head) {
    if (node === null) {
      return;
    }

    this.inOrderTraversal(node.left);
    this.sortedHeap.push(node.data);
    this.linkedList.addElementAtLast(node.data);
    this.inOrderTraversal(node.right);
  }
}

const heap = new Heap();
heap.addElementToHeap(4);
heap.addElementToHeap(2);
heap.addElementToHeap(3);
heap.addElementToHeap(7);
heap.addElementToHeap(6);
heap.addElementToHeap(1);
heap.addElementToHeap(5);

heap.inOrderTraversal();

heap.linkedList.printList();
