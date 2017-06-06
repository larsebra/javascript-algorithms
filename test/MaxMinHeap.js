import {expect} from "chai";
import {randomArrayGenerator } from "./test-tools/Arrays.js";

import BinHeap from "../lib/Data Structures/Trees/BinHeap.js";
import Node from "../lib/Common/Node.js";

describe("Binary Heap", () => {
  //Make an array that is going to be added to the heap. This array is not changed belowed.
  var randomArray = randomArrayGenerator(10000, 1000000, 0, true);

  describe('MinBinHeap', function() {
    this.timeout(5000)
    //Set time out, when random array is big it can take some ms to finish.
    // 1. it has to sort the array with quicksort
    // 2. it has to add a lot of values to the heap and removing them
    //Make copy of random array.
    var sortedAr = randomArray.slice(0);
    //Sort the elements
    sortedAr.sort(function(a, b){
      if(a >= b){
        return 1;
      }
      else{
        return -1;
      }
    });

    var mh = new BinHeap((a,b) => {
      return (a < b) ? true: false;
    });

    it("Should start empty", ()=>{
      expect(mh.isEmpty()).to.equal(true);
    });

    it("Size should return correct number of elements when adding and removing", () => {
      var i = 0;
      var to = 10;
      for(i = 0;i < to; i++){
        mh.add(Math.round(Math.random() * to));
        expect(mh.size()).to.equal(i + 1, "Size seems to return wrong number when adding elements");
      }
      for(i; i >= 0; i--){
        expect(mh.size()).to.equal(i, "Size seems to return wrong number when removing elements");
        mh.remove();
      }
    });

    it("Peek should not remove elements from the heap", ()=>{
      var i;
      var to = 10;
      for(i = 0;i < to; i++){
        mh.add( Math.round(Math.random() * to));
        mh.peek();
        expect(mh.size()).to.equal(i + 1);
      }
      for(i; i < to; i--){
        mh.peek();
        expect(mh.size()).to.equal(to);
      }
    });

    it("Empty should empty the array", function(){
      mh.empty();
      expect(mh.size()).to.equal(0);
    });

    it("Peek method should return the smallest value", ()=>{
      var i;
      var to = 100;
      for(i = to; i >= 0; i--){
        mh.add(sortedAr[i]);
        expect(mh.peek()).to.equal(sortedAr[i]);
      }
    });

    it("Empty should empty the array, again", function(){
      mh.empty();
      expect(mh.size()).to.equal(0);
    });

    it('Should add correctly, min value should always be at root', () => {
      var i = -1;
      var rnum
      for(rnum of randomArray){
        mh.add(rnum);
        i++;
      }
      expect(mh.peek()).to.equal(sortedAr[0], "Add() does not seem to add values correct");
    });

    it('Should always remove the smallest element which resides at the root', () => {
      var i = -1;
      var rnum
      for(rnum of randomArray){
        i++;
        expect(mh.remove()).to.equal(sortedAr[i], "remove() does not seem to remove values correct");
      }
    });

    it('Should be empty after removing all elements', () => {
      expect(mh.size()).to.equal(0,"Heap not empty, check size()");
      expect(mh.isEmpty()).to.equal(true, "Heap not empty, check isEmpty()");
    });

  });

  describe('MaxBinHeap', function() {
    this.timeout(5000)
    //Set time out, when random array is big it can take some ms to finish.
    // 1. it has to sort the array with quicksort
    // 2. it has to add a lot of values to the heap and removing them
    //Make copy of random array.
    var sortedAr = randomArray.slice(0);
    //Sort the elements
    sortedAr.sort(function(a, b){
      if(a >= b){
        return -1;
      }
      else{
        return 1;
      }
    });

    var mh = new BinHeap((a,b) => {
      return (a > b) ? true: false;
    });

    it("Should start empty", ()=>{
      expect(mh.isEmpty()).to.equal(true);
    });

    it("Size should return correct number of elements when adding and removing", () => {
      var i = 0;
      var to = 10;
      for(i = 0;i < to; i++){
        mh.add(Math.round(Math.random() * to));
        expect(mh.size()).to.equal(i + 1, "Size seems to return wrong number when adding elements");
      }
      for(i; i >= 0; i--){
        expect(mh.size()).to.equal(i, "Size seems to return wrong number when removing elements");
        mh.remove();
      }
    });

    it("Peek should not remove elements from the heap", ()=>{
      var i;
      var to = 10;
      for(i = 0;i < to; i++){
        mh.add( Math.round(Math.random() * to));
        mh.peek();
        expect(mh.size()).to.equal(i + 1);
      }
      for(i; i < to; i--){
        mh.peek();
        expect(mh.size()).to.equal(to);
      }
    });

    it("Empty should empty the array", function(){
      mh.empty();
      expect(mh.size()).to.equal(0);
    });

    it("Peek method should return the biggest value", ()=>{
      var i;
      var to = 100;
      for(i = to; i >= 0; i--){
        mh.add(sortedAr[i]);
        expect(mh.peek()).to.equal(sortedAr[i]);
      }
    });

    it("Empty should empty the array, again", function(){
      mh.empty();
      expect(mh.size()).to.equal(0);
    });

    it('Should add correctly, max value should always be at root', () => {
      var i = -1;
      var rnum
      for(rnum of randomArray){
        mh.add(rnum);
        i++;
      }
      expect(mh.peek()).to.equal(sortedAr[0], "Add() does not seem to add values correct");
    });

    it('Should always remove the biggest element', () => {
      var i = -1;
      var rnum
      for(rnum of randomArray){
        i++;
        expect(mh.remove()).to.equal(sortedAr[i], "remove() does not seem to remove values correct");
      }
    });

    it('Should be empty after removing all elements', () => {
      expect(mh.size()).to.equal(0,"Heap not empty, check size()");
      expect(mh.isEmpty()).to.equal(true, "Heap not empty, check isEmpty()");
    });

  });
})
