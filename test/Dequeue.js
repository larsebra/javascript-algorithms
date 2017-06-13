import {expect} from "chai";
import {randomArrayGenerator} from "./test-tools/Arrays.js";
import Deque from "../src/Data Structures/Linear Structures/Deque";

describe('Deque', function() {
    var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let q = new Deque();
    var i = 0;

    it('Collection should start of empty()', function(){
      expect(q.isEmpty()).to.be.true;
      expect(q.size()).to.equal(0, "size() does not return the correct number of elements");
    });

    it('Should throw EmptyQueueError when trying to remove from emptyqueue, front and back', function(){
      expect(()=>{q.popFirst()}).to.throw;
      expect(()=>{q.popBack()}).to.throw;
    });

    it('Should enqueue front correctly', function(){
      for(i = 9; i >= 0; i--){
        q.pushFront(testArray[i]);
      }

      i = 0;
      for(let el of q){
        expect(el).to.equal(testArray[i], "enqueue front fails.");
        i++;
      }
    });

    it('Should enqueue back correctly', function(){
      for(i = 10; i < 20; i++){
        q.pushBack(testArray[i]);
      }

      i = 0;
      for(let el of q){
        expect(el).to.equal(testArray[i], "enqueue fails.");
        i++;
      }
    });

    it('Size of collection Should be correct after adding elements', function(){
      expect(q.size()).to.equal(testArray.length, "size() does not return the correct number of elements");
    });

    it('Should dequeue front correctly', function(){
      for(i = 0; i <= 9; i++){
        expect(q.popFront()).to.equal(testArray[i], "Should pop front correctly");
      }
    });

    it('Should dequeue back correctly', function(){
      for(i = 19; i >= 10; i--){
        expect(q.popBack()).to.equal(testArray[i], "Should pop back correctly");
      }
    });

    it('Should peekLast and peekFirst correctly', function(){
      for(i = 9; i >= 0; i--){
        q.pushFront(testArray[i]);
        expect(q.peekFirst()).to.equal(testArray[i], "peekFirst does not peek at correct element");
      }

      for(i = 10; i < 20; i++){
        q.pushBack(testArray[i]);
        expect(q.peekLast()).to.equal(testArray[i], "peekLast does not peek at correct element");
      }
    });
});
