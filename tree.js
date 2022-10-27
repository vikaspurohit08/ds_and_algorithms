class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

class BinarySearchTree extends Tree {
  constructor() {
    super();
  }

  inOrderTraversal(node, array) {
    //40 //20 //10 //30 //35//60
    //left,root,right
    if (node === null) {
      return;
    }
    this.inOrderTraversal(node.left, array); //20 //10 //null //null //50
    array.push(node.data);
    this.inOrderTraversal(node.right, array); //null //30 //35 //60 //70
  }

  getInOrderData(node) {
    let array = [];
    this.inOrderTraversal(node, array);
    return array;
  }

  preOrderTraversal(node, array) {
    //root,left,right
    if (node === null) {
      return;
    }
    array.push(node.data);
    this.preOrderTraversal(node.left, array);
    this.preOrderTraversal(node.right, array);
  }

  getPreOrderData(node) {
    let array = [];
    this.preOrderTraversal(node, array);
    return array;
  }

  postOrderTraversal(node, array) {
    //left,right,root
    if (node === null) {
      return;
    }
    this.postOrderTraversal(node.left, array);
    this.postOrderTraversal(node.right, array);
    array.push(node.data);
  }

  getPostOrderData(node) {
    let array = [];
    this.postOrderTraversal(node, array);
    return array;
  }

  insertNode(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let travNode = this.root;
      let continueSearch = true;
      while (continueSearch) {
        if (newNode.data <= travNode.data) {
          if (travNode.left != null) {
            travNode = travNode.left;
          } else {
            travNode.left = newNode;
            continueSearch = false;
          }
        } else {
          if (travNode.right != null) {
            travNode = travNode.right;
          } else {
            travNode.right = newNode;
            continueSearch = false;
          }
        }
      }
    }
  }

  searchNode(data) {
    if (this.root === null) {
      return;
    } else {
      let travNode = this.root;
      let continueSearch = true;
      while (continueSearch) {
        if (travNode.left !== null) {
          if (travNode.left.data !== data) {
            travNode = travNode.left;
          } else {
            return travNode.left;
          }
        } else if (travNode.right !== null) {
          if (travNode.right.data !== data) {
            travNode = travNode.right;
          } else {
            return travNode.right;
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insertNode(40);
tree.insertNode(20);
tree.insertNode(10);
tree.insertNode(30);
tree.insertNode(35);
tree.insertNode(60);
tree.insertNode(50);
tree.insertNode(70);
console.log(tree.getInOrderData(tree.root));
console.log(tree.getPreOrderData(tree.root));
console.log(tree.getPostOrderData(tree.root));
console.log(tree.searchNode(20));
