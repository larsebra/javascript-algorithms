import {expect} from "chai";
import DoubleLinkedList from "../src/Data Structures/Linear Structures/DoubleLinkedList";
import {randomIntegerInRange} from "./test-tools/Random";

describe("DoubleLinkedList", function(){
  //The list
  var list = new DoubleLinkedList();

  var i = 0;//keeps track of current index in list, and over the different tests.
  var to = 10000; //Just a variable that decides how many elements to remove and add
  var lastLast = 0;//Variable that always points to the last value in list
  var lastFirst = 0;//Variable that always points to the first value in list

  it("should be empty at start", function(){
    expect(list.isEmpty()).to.be.true;
    expect(list.size()).to.equal(0,"size should be 0 when list is empty");
  });

  it("should add correctly", function(){
    for(i = 0; i < to; i++){

      //Alter between method to use when removing
      if(randomIntegerInRange(1) === 0){

        lastFirst = i;

        // Alter between method to use for adding
        if(randomIntegerInRange(1) === 0){
          expect(list.addFirst(lastFirst)).to.equal(i + 1, "addFirst should increment list size when adding to list");
        }
        else {
          expect(list.addInPosition(lastFirst, 0)).to.equal(i + 1, "addFirst should increment list size when adding to list");
        }
      }
      else{

        lastLast = i;

        // Alter between method to use for adding
        if(randomIntegerInRange(1) === 0){
          expect(list.addLast(lastLast)).to.equal(i + 1, "addLast should increment list size when adding to list");
        }
        else {
          expect(list.addInPosition(lastLast, i)).to.equal(i + 1, "addInPosition should increment list size when adding to list");
        }
      }
      expect(list.peekFirst()).to.equal(lastFirst, "Peek first does not return correct value");
      expect(list.peekLast()).to.equal(lastLast, "Peek last does not return correct value");
      expect(list.size()).to.equal(i + 1, "Size() should increment when adding to list");
    }
  });



  it("should remove correctly", function(){
    var s = list.size();
    while(s > 0){

      //Alter between removing first and moving last
      if(randomIntegerInRange(1) === 0){

        //Change between method to use when removing, to test both
        if(randomIntegerInRange(1) === 0){
          expect(list.removeFirst()).to.equal(lastFirst, "Remove last should return correct value, and return the same value as peekLast");
        }
        else {
          expect(list.removeAtPosition(0)).to.equal(lastFirst, "Remove last should return correct value, and return the same value as peekLast");
        }
        try{
          lastFirst = list.peekFirst();
        }catch(err){//Should evantually throw emptyList error
          expect(err.name).to.equal("EmptyListError", "Should throw correct error");
        }
      }
      else{

        //Change between method to use when removing, to test both
        if(randomIntegerInRange(1) === 0){
          expect(list.removeLast()).to.equal(lastLast, "Remove last should return correct value, and return the same value as peekLast");
        }
        else {
          expect(list.removeAtPosition(s-1)).to.equal(lastLast, "Remove last should return correct value, and return the same value as peekLast");
        }

        try{
            lastLast = list.peekLast();
        }
        catch(err){//Should evantually throw emptyList error
          expect(err.name).to.equal("EmptyListError", "Should throw correct error");
        }
      }
      try{
        expect(list.peekFirst()).to.equal(lastFirst, "Peek should return the correctvalue after removing");
        expect(list.peekLast()).to.equal(lastLast, "Peek should return the correctvalue after removing");
      }
      catch(err){//Should evantually throw emptyList error
        expect(err.name).to.equal("EmptyListError", "Should throw correct error");
      }
      finally{
        s--;
        expect(list.size()).to.equal(s, "Size() should decrement when removing last element");
      }
    }
  });

  it("should be empty after removing all elments", function(){
    expect(list.isEmpty()).to.be.true;
    expect(list.size()).to.equal(0,"size should be 0 when list is empty");
  });

  it("Should throw error when trying to remove from an empty list", function(){
      expect(()=>{list.removeFirst()}).to.throw();
      expect(()=>{list.removeLast()}).to.throw();
  });

  it("should add and remove correctly; checking a edge case", function(){
    for(i = 0; i < 10; i++){
        //Adding a number first
        expect(list.addFirst(1)).to.equal(1, "addFirst should increment list size when adding to list");
        expect(list.peekFirst()).to.equal(1, "Peek first does not return correct value");
        expect(list.peekLast()).to.equal(1, "Peek last does not return correct value");

        //Adding a second element
        expect(list.addFirst(2)).to.equal(2, "addFirst should increment list size when adding to list");
        expect(list.peekFirst()).to.equal(2, "Peek first does not return correct value");
        expect(list.peekLast()).to.equal(1, "Peek last does not return correct value");

        //adding third element
        expect(list.addLast(3)).to.equal(3, "addFirst should increment list size when adding to list");
        expect(list.peekLast()).to.equal(3, "Peek last does not return correct value");
        expect(list.peekFirst()).to.equal(2, "Peek first does not return correct value");

        //Removing them all, remove last is
        if(randomIntegerInRange(1) === 0){
          expect(list.removeFirst()).to.equal(2, "Peek first does not return correct value");
          expect(list.removeFirst()).to.equal(1, "Peek first does not return correct value");
          expect(list.removeFirst()).to.equal(3, "Peek first does not return correct value");
        }else{
          expect(list.removeLast()).to.equal(3, "Peek first does not return correct value");
          expect(list.removeLast()).to.equal(1, "Peek first does not return correct value");
          expect(list.removeLast()).to.equal(2, "Peek first does not return correct value");
        }

        expect(list.isEmpty()).to.be.true;//List must be empty now
    }
  });

  it("should insert and remove correctly at given index; testing addInPosition, and removeAtPosition", function(){
    var indexToAlter = 0;
    var add = false;
    var removedVal = null;
    var randomVal = 0;
    var randomRange = 10000;
    var numbersToAdd = 100;
    var addedNumbers = 0;

    //Adding 20 numbers
    for(i = 0; i < numbersToAdd; i++){

      //Calculate a random value in range to add in the list
      randomVal = randomIntegerInRange(randomRange);

      //Alter between adding first and adding last.
      if(randomIntegerInRange(1) === 0){
        expect(list.addFirst(randomVal)).to.equal(i + 1, "addFirst should increment list size when adding to list");
      }
      else{
        expect(list.addLast(randomVal)).to.equal(i + 1, "addLast should increment list size when adding to list");
      }

      addedNumbers++;
    }

    for(i = 0; i < (numbersToAdd-1); i++){
      //The element in position to alter.
      indexToAlter = randomIntegerInRange(20);

      //Alter between removing and adding at index
      if(randomIntegerInRange(1) === 0){
        //Calculate a random value in range to add in the list
        randomVal = randomIntegerInRange(randomRange);
        add = true;
        expect(list.addInPosition(randomVal, indexToAlter)).to.equal(list.size(), "add and size() should return the same number, when adding.");
        addedNumbers++;
      }
      else{
        removedVal = list.getValAtPosition(indexToAlter);
        expect(list.removeAtPosition(indexToAlter)).to.equal(removedVal, "getValAtPosition and removeValAtPosition returns different values.");
        addedNumbers--;
      }
    }

    //Check sometimes if the same number added gets removed correctly
    if(add && (randomIntegerInRange(1) === 0)){
      add = false;
      expect(list.removeAtPosition(indexToAlter)).to.equal(randomVal, "getValAtPosition and removeValAtPosition returns different values.");
    }

    expect(list.size()).to.equal(addedNumbers, "Size() should increment when adding to list");
  });

});
