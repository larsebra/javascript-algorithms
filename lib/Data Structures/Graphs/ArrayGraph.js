import Node from "../../Common/Node.js"
import BinHeap from "../Trees/BinHeap";
/**
 * Class representing a undirected Graph. 
 * Primitive datatypes used for construction: Array.
 * Space Complexity: |V^2|.
 * @class
 */
class ArrayGraph{
  constructor(numberOfNodes, cost){
    this.graph = new Array(numberOfNodes);
    for(var it = 0; it < this.graph.length; it++){
      this.graph[it] = new Array(numberOfNodes).fill(cost);
    }
    this.nodes = [];
  }

  addEdge(node1, node2, cost){
    if(!(0 < node1 && node1 < this.graph.length) && !(0 < node2 && node2 < this.graph.length)){
      //Throw something
    }
    if(cost < 0){
      return;
    }
    this.graph[node1][node2] = cost;
  }

  removeEdge(node1, node2){
    if(!(0 < node1 && node1 < this.graph.length) && !(0 < node2 && node2 < this.graph.length)){
      //Throw something
    }
    this.graph[node1][node2] = -1;
  }

  alterEdge(node1, node2, cost){
    return this.addEdge(node1, node2, cost);
  }

  /**
   * breadthFirstSearch - BFS search. It only looks for the first occourence of the item to search for.
   *
   * @param  {Number} fromNode     The node to search from
   * @param  {Number} searchForVal The value to search for in every node
   * @return {Object}              Return an object of the form: {found: Boolean, node: Node, nodeNumber: Number }
   */
  breadthFirstSearch(fromNode, searchForVal){
    if(!(0 < fromNode && fromNode < this.graph.length)){
      //Throw something
    }
    var queue = new Queue();
    var visitedNodes = new Array(this.graph.length).fill(false);
    var currentNode = fromNode;
    while(true){
      if(this.nodes[currentNode].getVal() === searchForVal){
        return {found: true, node: this.nodes[currentNode], nodeNumber: currentNode }
      }

      for(var j = 0; j < this.graph.length; j++){
        if(this.graph[currentNode][j] === -1){
            continue;
        }
        queue.enqueue(j);
      }

      try{
          currentNode = queue.dequeue();
      }
      finally{
          return {found: false, node: undefined, nodeNumber: undefined }
      }
    }
  }

  depthFirstSearch(){

  }

}
export default ArrayGraph;
