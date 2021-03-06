import {expect} from "chai";
import {compareArray, randomArrayGenerator } from "./test-tools/Arrays.js";

import Quicksort from "../src/Sort Algorithms/Quicksort";
import Mergesort from "../src/Sort Algorithms/Mergesort";
import Selectionsort from "../src/Sort Algorithms/Selectionsort";
import Bubblesort from "../src/Sort Algorithms/Bubblesort";


describe("Linear Sort Algorithms", function () {
  var numbersToSort = 100000;
  var rangeOfNumbers = 5000;
  var allowForNegativeNum = true;
  var randomArray = randomArrayGenerator(numbersToSort, rangeOfNumbers, -1, allowForNegativeNum);
  var asceArray = randomArray.slice(0);
  var descArray = randomArray.slice(0);

  describe("Googles Quicksort: Sorting " + numbersToSort + " random numbers. Used here to sort a copy of the random array so we can check the correctnes of the other algorithms", function () {
    it("Googles Quicksort should sort the array of random numbers in ascending order within reasonable time", function () {
      this.timeout(1000);
      asceArray.sort((a,b) => {
        if(a < b){
          return -1;
        }
        else if(a > b){
          return 1;
        }
        else{
          return 0;
        }
      });
    });
    it("Googles Quicksort should sort the array of random numbers in descending within reasonable time", function () {
      this.timeout(1000);
      descArray.sort((a,b) => {
        if(a < b){
          return 1;
        }
        else if(a > b){
          return -1;
        }
        else{
          return 0;
        }
      });
    });
  });

  describe("Quicksort: Sorting " + numbersToSort + " random numbers", function () {
    it('Should sort the array elements in ascending order as googles Quicksort does.', () => {
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
      Quicksort(array1, comparator);
      expect(compareArray(array1, asceArray)).to.be.true;
    });

    it('Should sort the array elements in descending order as googles Quicksort does.', () => {
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
      Quicksort(array1, comparator);
      expect(compareArray(array1, descArray)).to.be.true;
    });
  });

  describe("Mergesort: Sorting " + numbersToSort + " random numbers", function () {
    it('Should sort the elements correctly in incrementing order as the native environment sort algorithm does.', function() {
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
      array1 = Mergesort(array1, comparator);//This is a pure function so it will return a new array;
      expect(compareArray(array1, asceArray)).to.be.true;
    });
    it('Should sort the elements correctly in descending order as the native environment sort algorithm does.', function() {
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
      array1 = Mergesort(array1, comparator);//This is a pure function so it will return a new array;
      expect(compareArray(array1, descArray)).to.be.true;
    });
  });

  /**
    * Making a smaller random array for bubble sort and selections sort, they are so slow on large arrays.
    */

  var randomSBArray = randomArrayGenerator(1000, 1000, -1, true);
  var asceSBArray = randomSBArray.slice(0);
  var descSBArray = randomSBArray.slice(0);

  //Use native sorting algorithm to sort in ascending order.
  asceSBArray.sort((a,b) => {
        if(a < b){
          return -1;
        }
        else if(a > b){
          return 1;
        }
        else{
          return 0;
        }
      });

  //Use native sorting algorithm to sort in descening order.
  descSBArray.sort((a,b) => {
      if(a < b){
        return 1;
      }
      else if(a > b){
        return -1;
      }
      else{
        return 0;
      }
    });

  describe('Selectionsort, Sorting 1000 elements', function () {
    it('Should sort the elements correctly in ascending order as the native environment sort algorithm does.', function() {
      this.timeout(1000);
      var array1 = randomSBArray.slice(0);
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
      array1 = Selectionsort(array1, comparator);//This is a pure function so it will return a new array;
      expect(compareArray(array1, asceSBArray)).to.be.true;
    });

    it('Should sort the elements correctly in descending order as the native environment sort algorithm does.', function() {
      this.timeout(1000);
      var array1 = randomSBArray.slice(0);
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
      array1 = Selectionsort(array1, comparator);//This is a pure function so it will return a new array;
      expect(compareArray(array1, descSBArray)).to.be.true;
    });
  });

  describe('Bubblesort, sorting 1000 elements', function () {
    it('Should sort the elements correctly in ascending order as the native environment sort algorithm does.', function() {
      this.timeout(1000);
      var array1 = randomSBArray.slice(0);
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
      array1 = Bubblesort(array1, comparator);//This is a pure function so it will return a new array;
      expect(compareArray(array1, asceSBArray)).to.be.true;
    });

    it('Should sort the elements correctly in descending order as the native environment sort algorithm does.', function() {
      this.timeout(1000);
      var array1 = randomSBArray.slice(0);
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
      array1 = Bubblesort(array1, comparator);//This is a pure function so it will return a new array;
      expect(compareArray(array1, descSBArray)).to.be.true;
    });
  });

})
