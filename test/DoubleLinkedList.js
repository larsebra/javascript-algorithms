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
  var listAsItShouldBe = [];

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
          expect(list.unshift(lastFirst)).to.equal(i + 1, "unshift should increment list size when adding to list");
        }
        else {
          expect(list.addInPosition(lastFirst, 0)).to.equal(i + 1, "unshift should increment list size when adding to list");
        }

        expect(list.peekFirst()).to.equal(lastFirst, "Peek first does not return correct value");
      }
      else{
        lastLast = i;

        // Alter between method to use for adding
        if(randomIntegerInRange(1) === 0){
          expect(list.push(lastLast)).to.equal(i + 1, "push should increment list size when adding to list");
        }
        else {
          expect(list.addInPosition(lastLast, i)).to.equal(i + 1, "addInPosition should increment list size when adding to list");
        }

        expect(list.peekLast()).to.equal(lastLast, "Peek last does not return correct value");
      }

      expect(list.size()).to.equal(i + 1, "Size() should increment when adding to list");
    }
  });

  it("Checking iterator", function(){
    let list = new DoubleLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    let compArray = [1,2,3,4,5];
    for(let el of list){
        expect(el).to.equal(compArray.shift(), "Should iterate correctly");
    }
  });

  it("should remove correctly", function(){
    var s = list.size();
    while(s > 0){

      //Alter between removing first and moving last
      if(randomIntegerInRange(1) === 0){

        //Change between method to use when removing, to test both
        if(randomIntegerInRange(1) === 0){
          expect(list.shift()).to.equal(lastFirst, "Remove last should return correct value, and return the same value as peekLast");
        }
        else {
          expect(list.splice(0)).to.equal(lastFirst, "Remove last should return correct value, and return the same value as peekLast");
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
          expect(list.pop()).to.equal(lastLast, "Remove last should return correct value, and return the same value as peekLast");
        }
        else {
          expect(list.splice(s-1)).to.equal(lastLast, "Remove last should return correct value, and return the same value as peekLast");
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
      expect(()=>{list.shift()}).to.throw();
      expect(()=>{list.pop()}).to.throw();
  });

  it("should add and remove correctly; checking a edge case", function(){
    for(i = 0; i < 10; i++){
        //Adding a number first
        expect(list.unshift(1)).to.equal(1, "unshift should increment list size when adding to list");
        expect(list.peekFirst()).to.equal(1, "Peek first does not return correct value");
        expect(list.peekLast()).to.equal(1, "Peek last does not return correct value");

        //Adding a second element
        expect(list.unshift(2)).to.equal(2, "unshift should increment list size when adding to list");
        expect(list.peekFirst()).to.equal(2, "Peek first does not return correct value");
        expect(list.peekLast()).to.equal(1, "Peek last does not return correct value");

        //adding third element
        expect(list.push(3)).to.equal(3, "unshift should increment list size when adding to list");
        expect(list.peekLast()).to.equal(3, "Peek last does not return correct value");
        expect(list.peekFirst()).to.equal(2, "Peek first does not return correct value");

        //Removing them all, remove last is
        if(randomIntegerInRange(1) === 0){
          expect(list.shift()).to.equal(2, "Peek first does not return correct value");
          expect(list.shift()).to.equal(1, "Peek first does not return correct value");
          expect(list.shift()).to.equal(3, "Peek first does not return correct value");
        }else{
          expect(list.pop()).to.equal(3, "Peek first does not return correct value");
          expect(list.pop()).to.equal(1, "Peek first does not return correct value");
          expect(list.pop()).to.equal(2, "Peek first does not return correct value");
        }

        expect(list.isEmpty()).to.be.true;//List must be empty now
    }
  });

  it("should insert in position correctly", function(){

    var numbersToAdd = 10;
    var numbersToAddInMiddle = Math.round(numbersToAdd / 2);
    var randomNumber = 0;
    var randomNumRange = 1000;
    var middle = Math.round(numbersToAdd / 2);

    //Adding numbers in order
    for(i = 0; i < numbersToAdd; i++){
        expect(list.push(i + 1)).to.equal(i + 1, "push should increment list size when adding to list");
        if(i < middle){
          listAsItShouldBe.push(i + 1);
        }
    }

    //Check that add added correctly, the list should be in ascending order.
    for(i = 0; i < numbersToAdd; i++){
      expect(list.getValAtPosition(i)).to.equal(i + 1, "getValAtPosition should return correct number");
    }

    //Replace some of the values in the middle of the list with random values
    for(i = 0; i < numbersToAddInMiddle; i++){
      randomNumber = randomIntegerInRange(randomNumRange);
      var oldSize = list.size();
      expect(list.addInPosition(randomNumber, middle)).to.equal(oldSize + 1, "push should increment list size when adding to list");

      //The addInPosition method gives the same result as Arrays splice.
      listAsItShouldBe.splice(middle, 0, randomNumber)
    }

    //Add rest of the numbers in expected
    for(i = middle; i < numbersToAdd; i++){
      listAsItShouldBe.push(i + 1);
    }

    //Check that numbers are correspond with the expected correct array.
    for(i = 0; i < numbersToAdd + numbersToAddInMiddle; i++){
      expect(list.getValAtPosition(i)).to.equal(listAsItShouldBe[i], "list should be equal to expected value");
    }
  });

  it("should remove in position correctly", function(){
    var correctElementToRemove = 0;
    var middle = Math.floor((list.size() / 2)) - 1;
    var to = Math.floor(list.size() / 3);

    for(i = 0; i < to; i++){
      correctElementToRemove = listAsItShouldBe.splice(middle , 1)[0];
      var removedEl = list.splice(middle);
      expect(removedEl).to.equal(correctElementToRemove, "Should remove correct element");
    }

    for(i = 0; i < to; i++){
      correctElementToRemove = listAsItShouldBe.splice(i , 1)[0];
      var removedEl = list.splice(i);
      expect(removedEl).to.equal(correctElementToRemove, "Should remove correct element");
    }
    to = list.size();
    for(i = 0; i < to; i++){
      correctElementToRemove = listAsItShouldBe.splice(0 , 1)[0];
      var removedEl = list.splice(0);
      expect(removedEl).to.equal(correctElementToRemove, "Should remove correct element");
    }
    expect(list.isEmpty()).to.be.true;
  });

});
