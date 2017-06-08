import {expect} from "chai";
import {AStar} from "../src/Path Finding/A*";
import {compareArray} from "./test-tools/Arrays.js";

describe("A*", ()=>{
  it("Should find the shortest path given a monotonic and admissable heurisitc",()=>{
    //Monotonic and admissable heuristic
    var h = function(from, to){
      var es = [
             /*  A   B   C   D   E */
       /* A */ [ 0 , 1 , 2 , 3 , 4 ],
       /* B */ [-1 , 0 , 1 , 2 , 4 ],
       /* C */ [-1 ,-1 , 0 , 1 , 2 ],
       /* D */ [-1 ,-1 ,-1 , 0 , 1 ],
       /* E */ [-1 ,-1 ,-1 ,-1 , 0 ]
      ];
      return es[from][to];
    }

    var graph1 = [
            /*  A   B   C   D   E  */
      /* A */ [-1 , 1 ,-1 ,-1 , 5 ],
      /* B */ [-1 ,-2 , 1 ,-1 ,-1 ],
      /* C */ [-1 ,-1 ,-3 , 1 ,-1 ],
      /* D */ [-1 ,-1 ,-1 ,-4 , 1 ],
      /* E */ [-1 ,-1 ,-1 ,-1 ,-5 ]
    ];

    var AStarShortestPath = AStar(0, 4, graph1, h);
    var actualShortestPath = [0,1,2,3,4];
    expect(compareArray(actualShortestPath, AStarShortestPath)).to.be.true;
  })
});
