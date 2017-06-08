import {expect} from "chai";
import {compareArray, randomArrayGenerator } from "./test-tools/Arrays.js";

import quickSort from "../src/Sort Algorithms/QuickSort.js";
import mergeSort from "../src/Sort Algorithms/MergeSort.js";
import selectionSort from "../src/Sort Algorithms/SelectionSort.js";
import bubbleSort from "../src/Sort Algorithms/BubbleSort.js";


describe("Linear Sort Algorithms: Sorting 100000 random numbers, be patient with bubble sort and selection sort", function () {

  var randomArray = randomArrayGenerator(100000, 100000, -1, true);
  var array2 = randomArray.slice(0);

  describe("Googles QuickSort. Used here to sort a copy of the random array so we can check the correctnes of the other algorithms", function () {
    it("Googles quicksort should sort the array of 100000 random numbers within reasonable time", function () {
      this.timeout(10000);
      array2.sort((a,b) => {
        if(a >= b){
          return 1;
        }
        else {
          return -1;
        }
      })
    });
  })

  describe('QuickSort', function () {
    it('Expect that Quicksort sorts the array elements as googles quicksort algorithm does. Googles v8 js lib uses qs when there are over 10 elements to sort', () => {
      this.timeout(500);
      //Make a copy of randomArray
      //var array1 = randomArrayGenerator(10000, 1000000, -1, true);
      var array1 = randomArray.slice(0);
      quickSort(array1);
      expect(compareArray(array1, array2)).to.equal(true);
    });
  });

  describe('MergeSort', function () {
    it('Expect that merge sort sorts the element in the same order as the native environment sort algorithm does.', function() {
      this.timeout(500);
      //var array1 = randomArrayGenerator(10000, 50000, -1, true);
      var array1 = randomArray.slice(0);
      array1 = mergeSort(array1);//This is a pure function so it will return a new array;
      expect(compareArray(array1, array2)).to.equal(true);
    });
  });
/*
  describe('SelectionSort', function () {
    this.timeout(10000);
    it('Expect that selection sort sorts the element in the same order as native environment sort algorithm does.', function() {
      //var array1 = randomArrayGenerator(10000, 50000, -1, true);
      var array1 = randomArray.slice(0);
      array1 = selectionSort(array1);//This is a pure function so it will return a new array;
      expect(compareArray(array1, array2)).to.equal(true);
    });
  });

  describe('BubbleSort', function() {
    this.timeout(10000);
    it('Expect that bubble sort sorts the element in the same order as native environment sort algorithm does.', () => {
      //var array1 = randomArrayGenerator(10000, 50000, -1, true);
      var array1 = randomArray.slice(0);
      array1 = selectionSort(array1);//This is a pure function so it will return a new array;
      expect(compareArray(array1, array2)).to.equal(true);
    });
  });
*/
})
