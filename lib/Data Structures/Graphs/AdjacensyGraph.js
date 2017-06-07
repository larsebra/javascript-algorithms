import GraphNode from "../../Common/Node.js"
import BinHeap from "./BinHeap";
import Queue from "../Linear Structures/Queue"
/**
 * Class representing a Graph. Graph implemented with adjacency list.
 * Primitive datatypes used for construction: Array.
 * Space Complexity: |V|.
 * @class
 */
class AdjacencyGraph{
    this.nodes = [];
  }

  addEdge(node1, node2, cost){

  }

  removeEdge(node1, node2){

  }

  alterEdge(node1, node2, cost){
    return this.addEdge(node1, node2, cost);
  }

  breadthFirstSearch(fromNode, searchFor){
    var queue = new Queue();
  }

  depthFirstSearch(){
    var queue = new Queue();
    visit()
  }

  dijkstras(fromNode, toNode){
    //Need a priority queue of some sort
  }

  AStar(fromNode, toNode, heuristic){
    //Need a priority queue of some sort.
  }
}

export default AdjacencyGraph;
