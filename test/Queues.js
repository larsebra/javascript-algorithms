import {expect} from "chai";
import {randomArrayGenerator} from "./test-tools/Arrays.js";
import {Queue, QueueAsNativeArray} from "../lib/Data Structures/Linear Structures/Queues.js";

describe('Queues', function() {

  describe('Queue: this is tested with 100.000 random numbers, this queue implementation is the fastest in this lib', function() {
    var numOfEl = 100000;
    var rangeOfNum = 100000;
    var randomArray = randomArrayGenerator(rangeOfNum, numOfEl, 0, true);
    var q = new Queue(numOfEl);
    var i;

    it('Queue Should start of empty', function(){
      expect(q.isEmpty()).to.equal(true, "empty() should return true");
      expect(q.size()).to.equal(0, "size should return 0");
    });

    it('Enqueue and Size should return correct amount of elements in q after adding', function(){
      for(var i = 0; i < numOfEl; i++){
        expect(q.enqueue(randomArray[i])).to.equal((i+1), "enqueue should return the right amount of elements after adding");
        expect(q.size()).to.equal((i+1), "Size Should return the correct amount of elements after adding");
      }
    });

    it('Queue should be full after enqueueing and filling up the whole queue', function(){
      expect(q.isFull()).to.equal(true, "empty() should return false");
      expect(q.size()).to.equal(numOfEl, "size should return full full size");
    });

    /*it('Queue should throw FullQueueError when trying to add to full queue', function(){
      expect(q.enqueue(randomArray[0])).to.throw(/FullQueueError/);
    });*/

    it('Dequeue should return the right elements, dequeue all elements.', function(){
      for(i = 0; i < numOfEl; i++){
        expect(q.dequeue()).to.equal(randomArray[i], "Dequeing returns the wrong elements");
      }
    });

    /*it('Queue should throw EmptyQueueError when trying to add to full queue', function(){
      expect(q.enqueue(randomArray[0])).to.throw(/FullQueueError/);
    });*/

    it('Queue should be empty after dequeueing all elements', function(){
      expect(q.isEmpty()).to.equal(true, "empty() should return true");
      expect(q.size()).to.equal(0, "size should return 0");
    });

    it('Should enque and dequeue correctly', function(){
      var to = numOfEl/2;
      for(i = 0; i < to; i++){
        expect(q.enqueue(randomArray[i])).to.equal(i + 1, "Que contains the wrong amount of elements");
      }

      expect(q.size()).to.equal(numOfEl/2, "size should return the half size when filling the q up 50%");

      for(i = 0; i < to; i++){
        expect(q.dequeue()).to.equal(randomArray[i], "Dequeing returns the wrong elements");
      }

      expect(q.isEmpty()).to.equal(true, "empty() should return true");
      expect(q.size()).to.equal(0, "size should return 0");

      for(i = 0; i < numOfEl; i++){
        expect(q.enqueue(randomArray[i])).to.equal(i + 1, "Que contains the wrong amount of elements");
      }

      expect(q.isFull()).to.equal(true, "isFull() should return true, when q is filled up");
      expect(q.size()).to.equal(numOfEl, "size should return full full size of q");

      for(i = 0; i < numOfEl; i++){
        expect(q.dequeue()).to.equal(randomArray[i], "Dequeing returns the wrong elements");
      }

      expect(q.isEmpty()).to.equal(true, "empty() should return true");
      expect(q.size()).to.equal(0, "size should return 0");
    });

    it('Peek should always point at the first element in line', function(){
      for(i = 0; i < randomArray.length; i++){
        q.enqueue(randomArray[i]);
        expect(q.peek()).to.equal(randomArray[0]);
      }
      for(; i > 0; i--){
        var peek = q.peek()
        expect(q.dequeue()).to.equal(peek, "Deque should return the same as peek points to");
      }
    });
  });

  describe('QueueAsNativeArray: is tested with 10.000, this queue implementation is slow', function() {
    var q = new QueueAsNativeArray();
    var i;
    var numOfRan = 10000;
    var rangeOfNum = 10000;
    var randomArray = randomArrayGenerator(rangeOfNum, numOfRan, 0, true);

    it('Enqueue and Size should return correct amount of elements in q after adding', function(){
      for(var i = 0; i < 5000; i++){
        expect(q.enqueue(randomArray[i])).to.equal((i+1), "enqueue should return the right amount of elements after adding");
        expect(q.size()).to.equal((i+1), "Size Should return the correct amount of elements after adding");
      }
    });

    it('Peek should always point at the first element in line', function(){
      for(i = 5000; i < randomArray.length; i++){
        q.enqueue(randomArray[i]);
        expect(q.peek()).to.equal(randomArray[0]);
      }
    });

    it('Should enque and dequeue correctly', function(){
      var to = 5000;
      for(i = 0; i < to; i++){
        expect(q.dequeue()).to.equal(randomArray[i], "Dequeing returns the wrong elements");
      }
      for(; i < randomArray.length; i++){
        expect(q.enqueue(randomArray[i])).to.equal(i + 1, "Que contains the wrong amount of elements");
      }
      for(i = 0; i < randomArray.length; i++){
        expect(q.dequeue()).to.equal(randomArray[to +(i % to)], "Dequeing returns the wrong elements, while dequeueing all elements");
      }
    });
  });
});
