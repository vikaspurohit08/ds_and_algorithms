const { Queue } = require("./queue");

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(vertex, edge) {
    this.adjList.get(vertex).push(edge);
  }

  bfsTraversal(startNode) {
    let visited = [];
    //1. array to maintain visited nodes
    let q = new Queue();

    visited[startNode] = true; //[{'a':true}]
    //2. initialNode is marked as visited and added to queue
    q.enqueue(startNode); //q => ['a']
    while (!q.empty()) {
      //3. until queue becomes empty iterate
      //true
      //4. take the queue element and get it's connected nodes
      let queueElement = q.dequeue(); //'a' //'b' //'c'
      console.log(queueElement); //'a' //'b'
      let list = this.adjList.get(queueElement); //[b,c] //[c,e] //[d,f]

      for (let i in list) {
        //5. iterate over connected nodes
        //b
        let neighbour = list[i]; //b //c //c //e //d

        if (!visited[neighbour]) {
          //6. check if the node is previously visited
          //true //true //false //true //true //true
          visited[neighbour] = true; //['a','b','c','e','d','f'] //7. mark node as visited
          q.enqueue(neighbour); //['e'] //8. Add this new neighbour to queue to find it's connected nodes
        }
      }
    }
  }

  printGraph() {
    let keys = this.adjList.keys();

    for (let i of keys) {
      let values = this.adjList.get(i);
      let valueString = "";
      for (let j of values) {
        valueString += j + " ";
      }
      console.log(`${i} => `, valueString);
    }
  }
}

const g = new Graph(5);
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");
g.addEdge("a", "b");
g.addEdge("b", "c");
g.addEdge("c", "d");
g.addEdge("d", "e");
g.addEdge("e", "f");
g.addEdge("f", "a");
g.addEdge("a", "c");
g.addEdge("b", "e");
g.addEdge("c", "f");

g.printGraph();
g.bfsTraversal("a");
