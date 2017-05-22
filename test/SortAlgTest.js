import {expect} from "chai";
import compareArray from "./test-tools/Arrays.js";

import quickSort from "../lib/Sort Algorithms/QuickSort.js";
import mergeSort from "../lib/Sort Algorithms/MergeSort.js";
import selectionSort from "../lib/Sort Algorithms/SelectionSort.js";
import bubbleSort from "../lib/Sort Algorithms/BubbleSort.js";

describe('QuickSort', () => {
  it('Expect that Quicksort sorts the value as googles(V8 engine) quicksort algorithms does', () => {
    var array1 = [7265, 7577, 6009, 13684, 34, 18623, 17012, 7241, 3750, 4063, 6370, 16155, 19261, 15069, 163, 8833, 15782, 536, 2966, 22,
      10235, 19586, 15393, 11680, 13822, 11932, 17637, 9173, 9260, 16883, 3205, 17713, 7162,
       11821, 2966, 11346, 1402, 606, 15160, 11087, 2474, 16585, 4093, 12423, 843, 1557, 4836, 2980, 34, 15811, 729, 2682];

     var array2 = [7265, 7577, 6009, 13684, 34, 18623, 17012, 7241, 3750, 4063, 6370, 16155, 19261, 15069, 163, 8833, 15782, 536, 22,
       10235, 19586, 15393, 11680, 13822, 34, 11932, 17637, 9173, 9260, 16883, 3205, 17713, 7162,
        11821, 2966, 11346, 1402, 606, 15160, 11087, 2474, 16585, 2966, 4093, 12423, 843, 1557, 4836, 2980, 15811, 729, 2682];

    quickSort(array1);
    array2.sort((a,b) => {
      if(a > b){
        return 1;
      }
      else {
        return -1;
      }
    });

    expect(compareArray(array1, array2)).to.equal(true);
  });
});

describe('MergeSort', () => {
  it('Expect that merge sort sorts the element in the same order as googles(V8 engine) sort algorithm does.', () => {
    var array1 = [7265, 7577, 6009, 13684, 34, 18623, 17012, 7241, 3750, 4063, 6370, 16155, 19261, 15069, 163, 8833, 15782, 536, 2966, 22,
      10235, 19586, 15393, 11680, 13822, 11932, 17637, 9173, 9260, 16883, 3205, 17713, 7162,
       11821, 2966, 11346, 1402, 606, 15160, 11087, 2474, 16585, 4093, 12423, 843, 1557, 4836, 2980, 34, 15811, 729, 2682];

     var array2 = [7265, 7577, 6009, 13684, 34, 18623, 17012, 7241, 3750, 4063, 6370, 16155, 19261, 15069, 163, 8833, 15782, 536, 22,
       10235, 19586, 15393, 11680, 13822, 34, 11932, 17637, 9173, 9260, 16883, 3205, 17713, 7162,
        11821, 2966, 11346, 1402, 606, 15160, 11087, 2474, 16585, 2966, 4093, 12423, 843, 1557, 4836, 2980, 15811, 729, 2682];

    array1 = mergeSort(array1);//This is a pure function so it will return a new array;

    array2.sort((a,b) => {
      if(a > b){
        return 1;
      }
      else {
        return -1;
      }
    });

    expect(compareArray(array1, array2)).to.equal(true);
  });
});

describe('SelectionSort', () => {
  it('Expect that selection sort sorts the element in the same order as googles(V8 engine) sort algorithm does.', () => {
    var array1 = [7265, 7577, 6009, 13684, 34, 18623, 17012, 7241, 3750, 4063, 6370, 16155, 19261, 15069, 163, 8833, 15782, 536, 2966, 22,
      10235, 19586, 15393, 11680, 13822, 11932, 17637, 9173, 9260, 16883, 3205, 17713, 7162,
       11821, 2966, 11346, 1402, 606, 15160, 11087, 2474, 16585, 4093, 12423, 843, 1557, 4836, 2980, 34, 15811, 729, 2682];

     var array2 = [7265, 7577, 6009, 13684, 34, 18623, 17012, 7241, 3750, 4063, 6370, 16155, 19261, 15069, 163, 8833, 15782, 536, 22,
       10235, 19586, 15393, 11680, 13822, 34, 11932, 17637, 9173, 9260, 16883, 3205, 17713, 7162,
        11821, 2966, 11346, 1402, 606, 15160, 11087, 2474, 16585, 2966, 4093, 12423, 843, 1557, 4836, 2980, 15811, 729, 2682];

    array1 = selectionSort(array1);//This is a pure function so it will return a new array;

    array2.sort((a,b) => {
      if(a > b){
        return 1;
      }
      else {
        return -1;
      }
    });

    expect(compareArray(array1, array2)).to.equal(true);
  });
});

describe('BubbleSort', () => {
  it('Expect that bubble sort sorts the element in the same order as googles(V8 engine) sort algorithm does.', () => {
    var array1 = [7265, 7577, 6009, 13684, 34, 18623, 17012, 7241, 3750, 4063, 6370, 16155, 19261, 15069, 163, 8833, 15782, 536, 2966, 22,
      10235, 19586, 15393, 11680, 13822, 11932, 17637, 9173, 9260, 16883, 3205, 17713, 7162,
       11821, 2966, 11346, 1402, 606, 15160, 11087, 2474, 16585, 4093, 12423, 843, 1557, 4836, 2980, 34, 15811, 729, 2682];

     var array2 = [7265, 7577, 6009, 13684, 34, 18623, 17012, 7241, 3750, 4063, 6370, 16155, 19261, 15069, 163, 8833, 15782, 536, 22,
       10235, 19586, 15393, 11680, 13822, 34, 11932, 17637, 9173, 9260, 16883, 3205, 17713, 7162,
        11821, 2966, 11346, 1402, 606, 15160, 11087, 2474, 16585, 2966, 4093, 12423, 843, 1557, 4836, 2980, 15811, 729, 2682];

    array1 = selectionSort(array1);//This is a pure function so it will return a new array;

    array2.sort((a,b) => {
      if(a > b){
        return 1;
      }
      else {
        return -1;
      }
    });

    expect(compareArray(array1, array2)).to.equal(true);
  });
});
