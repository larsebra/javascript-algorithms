import {expect} from "chai";
import LinkedList from "../src/Data Structures/Linear Structures/LinkedList"

describe("LinkedList", function(){
  var list = new LinkedList();
  it("should be empty at start", function(){
    expect(list.isEmpty()).to.be.true;
    expect(list.size()).to.equal(0,"size should be 0 when list is empty");
  });

  it("should add correctly", function(){
    list.unshift(1);
    expect(list.size()).to.equal(1, "Size() should increment when adding to list");
    expect(list.peekFirst()).to.equal(1, "Peek does not return correct value");
    expect(list.peekLast()).to.equal(1, "Peek does not return correct value");
    list.unshift(2);
    expect(list.size()).to.equal(2, "Size() should increment when adding to list");
    expect(list.peekFirst()).to.equal(2, "Peek does not return correct value");
    list.push(3);
    expect(list.size()).to.equal(3, "Size() should increment when adding to list");
    expect(list.peekLast()).to.equal(3, "Peek does not return correct value");
  });

  it("should remove correctly", function(){
    var s = list.size();
    while(list.size() > 0){
      expect(list.peekLast()).to.equal(3, "peek last should always peek at the last element");
      expect(list.peekFirst()).to.equal(list.shift(), "removes wrong value");
      expect(list.size()).to.equal(--s, "size should decrement when removing");
    }
  });

  it("Checking iterator", function(){
    let list = new LinkedList();
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

});
