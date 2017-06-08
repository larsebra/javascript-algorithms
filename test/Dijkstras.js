import {expect} from "chai";
import {compareArray} from "./test-tools/Arrays.js";
import {dijkstras} from "../src/Path Finding/Dijstras.js";

describe("Dijstras Shortest Path Algorithm", function(){
  it("Should find the shortest path",function(){
    var graph1 = [
           /*  A   B   C   D   E */
    /* A */  [-1 , 1 ,-1 ,-1 , 5 ],
    /* B */  [-1 ,-2 , 1 ,-1 ,-1 ],
    /* C */  [-1 ,-1 ,-3 , 1 ,-1 ],
    /* D */  [-1 ,-1 ,-1 ,-4 , 1 ],
    /* E */  [-1 ,-1 ,-1 ,-1 ,-5 ]
  ];

  var dijstrasShortestPath = dijkstras(0, 4, graph1);
  var actualShortestPath = [0,1,2,3,4];
  expect(compareArray(actualShortestPath, dijstrasShortestPath)).to.be.true;

  var graph2 = [
         /*  A   B   C   D   E */
  /* A */  [-1 , 1 ,-1 ,-1 , 4 ],
  /* B */  [-1 ,-2 , 1 ,-1 ,-1 ],
  /* C */  [-1 ,-1 ,-3 , 1 ,-1 ],
  /* D */  [-1 ,-1 ,-1 ,-4 , 1 ],
  /* E */  [-1 ,-1 ,-1 ,-1 ,-5 ]
  ];

  dijstrasShortestPath = dijkstras(0, 4, graph2);
  actualShortestPath = [0,4];
  expect(compareArray(actualShortestPath, dijstrasShortestPath)).to.be.true;
  })
});
