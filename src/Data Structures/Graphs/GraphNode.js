import Node from "../../Common/Node.js"

/**
 *Class representing a graph node. Class in construciton phase.
 */
class GraphNode extends Node{
  constructor(val){
    super(val);
    this.adjacencyList = [];
  }

  addNeighbour(GraphNode){
    this.adjacencyList.push(GraphNode);
  }
}

export default GraphNode
