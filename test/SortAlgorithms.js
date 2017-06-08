import {expect} from "chai";
import {compareArray, randomArrayGenerator } from "./test-tools/Arrays.js";

import quickSort from "../src/Sort Algorithms/Quicksort";
import mergeSort from "../src/Sort Algorithms/MergeSort";
import selectionSort from "../src/Sort Algorithms/SelectionSort";
import bubbleSort from "../src/Sort Algorithms/BubbleSort";


describe("Linear Sort Algorithms: Sorting 100000 random numbers, be patient with bubble sort and selection sort", function () {

  var randomArray = randomArrayGenerator(100000, 100000, -1, true);
  var asceArray = randomArray.slice(0);
  var descArray = randomArray.slice(0);

  describe("Googles QuickSort. Used here to sort a copy of the random array so we can check the correctnes of the other algorithms", function () {
    it("Googles quicksort should sort the array of 100000 random numbers in ascending order within reasonable time", function () {
      this.timeout(1000);
      asceArray.sort((a,b) => {
        if(a > b){
          return 1;
        }
        else {
          return -1;
        }
      });
    });
    it("Googles quicksort should sort the array of 100000 random numbers in descending within reasonable time", function () {
      this.timeout(1000);
      descArray.sort((a,b) => {
        if(a < b){
          return 1;
        }
        else {
          return -1;
        }
      });
    });
  });

  describe('QuickSort', function () {
    it('Should sort the array elements in ascending order as googles quicksort does.', () => {
      this.timeout(1000);
      var array1 = randomArray.slice(0);
      var comparator = function(a,b) {
        if(a < b){
          return -1;
        }
        else if(a > b){
          return 1;
        }
        else{
          return 0;
        }
      }
      quickSort(array1, comparator);
      expect(compareArray(array1, asceArray)).to.equal(true);
    });

    it('Should sort the array elements in descending order as googles quicksort does.', () => {
      this.timeout(1000);
      var array1 = randomArray.slice(0);
      var comparator = function(a,b) {
        if(a < b){
          return 1;
        }
        else if(a > b){
          return -1;
        }
        else{
          return 0;
        }
      }
      quickSort(array1, comparator);
      expect(compareArray(array1, descArray)).to.equal(true);
    });
  });

  describe('MergeSort', function () {
    it('Should sort the elements correctly in the same order as the native environment sort algorithm does.', function() {
      this.timeout(1000);
      var array1 = randomArray.slice(0);
      var comparator = function(a,b) {
        if(a < b){
          return -1;
        }
        else if(a > b){
          return 1;
        }
        else{
          return 0;
        }
      }
      array1 = mergeSort(array1, comparator);//This is a pure function so it will return a new array;
      expect(compareArray(array1, asceArray)).to.equal(true);
    });
    it('Should sort the elements correctly in the same order as the native environment sort algorithm does.', function() {
      this.timeout(1000);
      var array1 = randomArray.slice(0);
      var comparator = function(a,b) {
        if(a < b){
          return 1;
        }
        else if(a > b){
          return -1;
        }
        else{
          return 0;
        }
      }
      array1 = mergeSort(array1, comparator);//This is a pure function so it will return a new array;
      expect(compareArray(array1, descArray)).to.equal(true);
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
