import BinHeap from "../Data Structures/Trees/BinHeap.js"
/**
  *
  *                AAA
  *               A:::A
  *              A:::::A
  *             A:::::::A                 ******         ******
  *            A:::::::::A                *:::::*       *:::::*
  *           A:::::A:::::A               ***::::*******::::***
  *          A:::::A A:::::A                 **:::::::::::**
  *         A:::::A   A:::::A             ******:::::::::******
  *        A:::::A     A:::::A            *:::::::::::::::::::*
  *       A:::::AAAAAAAAA:::::A           ******:::::::::******
  *      A:::::::::::::::::::::A             **:::::::::::**
  *     A:::::AAAAAAAAAAAAA:::::A         ***::::*******::::***
  *    A:::::A             A:::::A        *:::::*       *:::::*
  *   A:::::A               A:::::A       ******         ******
  *  A:::::A                 A:::::A
  * AAAAAAA                   AAAAAAA
  *
  * AStar - This is a implementation of the A* algorithm for a directed graph implemented as a 2D array.
  *  A* is a algorithm for finding the shortest path from a node to another in a graph using a heuristic function.
  *  It is very similar to dijkstras algorithm, if the heuristic in Astar returns 0 for all inputs, it will work in almost the same way
  *  as dijkstraas. It is important for the heuristic to be admissable to be able to find the optimal path,
  *  see below for more information on this. For the algorithm to be effective and do as little work as possible,
  *  it should not revisit nodes, therefore it is important that the heuristic is monotone,
  *  see below for more information. All in all the property of the heuristic is very important for the Astar to work
  *  correctly and efficient.
  *
  * Optimal path:
  *  The heuristic plays a major part on finding the optimal path. If Astar should find the shortest path the heuristic must
  *  be admissable or valid, this means that the heuristic must not over-estimate or under-estimate the cost to goal node,
  *  this can cause the algorithm to either not chose a path via x or to wrongly chose a path via x, this can cause the algorithm
  *  to not find the optimal path. In short this property must be true:  L(x) + h(x) <= L(x) + d(x,y) + h(y) = L(y) + h(y),
  *  where L is the cost of the path from some source node to node the input node, d is the hopp cost between the two input
  *  nodes and finally h is the heuristic. In short L(x) + h(x) <=  L(y) + h(y), one cannot decrease the cost to jump to a
  *  neighbour node.
  *
  * Effective A*:
  *  In order for the algorithm not to revisit nodes several times, the heuristic should be monotone, in formal meaning it
  *  should have this property: for all x and y, h(x)<= c(x,y) + h(y), where x and y are neighbour nodes. If it has this property
  *  it is as effective as it can be.
  *
  *  For more information on selecting the correct heuristic @see{}
  *
  * Implementation details:
  *  For priority queue this implementation uses a binaryheap. If nodes with equal cost paths are added, the first node added
  *  is served first, then the second, etc.. The implementation of the binary heap is a bit slow, work is in progress to fix
  *  these issues.
  *
  *  To keep track of visited nodes it has a bolean Array with the size of the number of nodes in the graph, each index indicates
  *  whether or not the node has been visited.
  *
  *  This implementation operates on a given 2d array of this form:
  *     +----+----+----+----+----+
  *     |    |  A |  B |  C |  D |
  *     +------------------------+
  *     |  A | -1 |  X |  X |  X |
  *     +------------------------+
  *     |  B |  X | -1 |  X |  X |
  *     +------------------------+
  *     |  C |  X |  X | -1 |  X |
  *     +------------------------+
  *     |  D |  X |  X |  X | -1 |
  *     +----+----+----+----+----+
  *
  * Here A, B, C, D denotes the nodes in the graph, the letter x is a number representing cost, and whether or not there is a
  * path between the nodes. If there exists a path between nodes A and B there must be a number > -1 in the cell [A][B], if the
  * number in the cell is negative, there is assumed that a path between the nodes does not exist.
  * Further, The graph is assumed to be directional, so each row denotes from and each column means to, so cell [C][A] means
  * there exists a directed path between C and A that goes from C to A with ost X; C ---X---> A.
  * The letters in the array are just for illustration purposes, the array should only contain numbers indicating cost on the
  * path between the nodes.
  *
  * Time Complexity:
  *
  * Space Complexity:
  *
  * @param  {Number} fromNode - The node for search from
  * @param  {Number} toNode - The node to search for.
  * @param  {Array}  graph - The given graph to search in.
  * @param  {Function} heuristic - The heuristic function. The heuristic should be admissable and monotonic for A* to find optimal path and be effective.
  *                                The heuristic should be on the following form: heuristic(x), where x is a node and the return value is the estimated
  *                                estimated cost to goal from that node (x), this value must be > -1. If -1 is returned infinity is assumed.
  * @return {type} - The optimal path if the heuristic given is admissable. Empty array if no path is found
  * @throws
  *
  * @author Lars Erik Bratlie <lars00.brat@gmail.com>
*/
export function AStar(fromNode, toNode, graph, heuristic){
  if(!(0 < fromNode && fromNode < graph.length) && !(0 < toNode && toNode < graph.length)){
    //Throw something
  }

  var shortestPath = [];
  var priQueue = new BinHeap((a,b)=>{
    //The less than operator here will cause equal priority nodes to be visited in a fifo manner.
    return (a.priority < b.priority) ? true: false;
  });
  var currentNode = null;
  var visited = new Array(graph.length).fill(null);  //A boolean array used to mark visited node, filled with null references
  //Object representing a Node.
  var Node = function(nodeNr, c, h, cameFrom, NrOfHops){
                this.nodeNr = nodeNr;                //The nodeNr from the graph array.
                this.cost = c;                       //Cost of traveling from source to this node
                this.heuristic = h;                  //The estimated cost of traveling via this node to goal.
                this.priority = this.cost + this.heuristic; //The total cost from this node + estimation. This value is used by priQueue.
                this.cameFrom =  currentNode;        //Reference to the node that opened this node, the came from node.
                this.NrOfHops = NrOfHops;            //NrOfHops from source to this node.
              }

  //Add the first node(source) to the queue.
  priQueue.add(new Node(fromNode, 0, 0, null,  0));

  while(!priQueue.isEmpty()){
    //Remove the node with the shortest distance from source and visit it.
    currentNode = priQueue.remove();

    //There is not necesarry to revisit closed nodes with lower path cost.
    if((visited[currentNode.nodeNr] != null) && (visited[currentNode.nodeNr].cost < currentNode.cost)){
      continue;
    }

    //Mark as visited
    visited[currentNode.nodeNr] = currentNode;

    //Check if currentNode is the goal node, the shortest path must be reached.
    if(currentNode.nodeNr === toNode){
      //Calculate the shortest path by traversing the found path backwards
      var fromNode = currentNode;
      var j = fromNode.NrOfHops;
      //Add each node in the path to the return array.
      while(fromNode !== null){
        shortestPath[j--] = fromNode.nodeNr;
        fromNode = fromNode.cameFrom;
      }
      break;
    }

    //Open Neighbour nodes and put them in the priority queue if they do not exists in it
    for(var i = 0; i < graph.length; i++){
      //If there are no path to node.
      if(graph[currentNode.nodeNr][i] < 0){
        continue;
      }

      var c = currentNode.cost + graph[currentNode.nodeNr][i];
      var h = heuristic(i, toNode);

      //No need to add infinity estimated paths, or nodes that are visited but there allready exists a lower cost path to it.
      if((h < 0) || ((visited[i] != null) && (visited[i].cost < c))){
        continue;
      }

      priQueue.add(new Node(
                    //Neighbour node nr relative to currentNode
                    i,
                    //Total cost so far to currentNode + cost of the path from current to neighbour
                    c,
                    //The heuristic value from neighbour node
                    h,
                    //Store the reference to currentNode, used to find the path taken to this node
                    currentNode,
                    //How many node hops has been made since the beginning to reach this node
                    currentNode.NrOfHops + 1
                  ));
    }
  }
  return shortestPath;
}
