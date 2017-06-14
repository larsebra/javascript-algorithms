import RingBuffer from "../src/Data Structures/Linear Structures/RingBuffer";
import {expect} from "chai";

describe("RingBuffer",function(){
  var bfrSize = 20;
  var b = new RingBuffer(bfrSize , false);
  var testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  var i = 0;

  it("Should start of empty", function(){
    expect(b.isEmpty()).to.be.true;
    expect(b.isFull()).to.be.false;
    expect(b.size()).to.equal(0, "Size should be 0 when buffer is initialized");
  });

  it("Should return correct size when writing", function(){
    for(i=0; i<bfrSize; i++){
      expect(b.write(testArray[i])).to.equal(i+1);
      expect(b.size()).to.equal(i+1);
    }
  });

  it("Should be iterable and loop over the expected values", function(){
    i = 0;
    for(el of b){
      expect(el).to.equal(testArray[i]);
      i++
    }
  });

  it("Should throw error when trying to remove from a empty buffer", function(){
    expect(()=>{b.write(1)}).to.throw()
  });

  it("Should be full after filling up the whole buffer", function(){
    expect(b.isEmpty()).to.be.false;
    expect(b.isFull()).to.be.true;
    expect(b.size()).to.equal(bfrSize, "Size should be 0 when buffer is initialized");
  });

  it("Should read the same that was written in same order", function(){
    for(i=0; i<bfrSize; i++){
      expect(b.read()).to.equal(testArray[i]);
    }
  });

  it("Should be empty after removing everything", function(){
    expect(b.isEmpty()).to.be.true;
    expect(b.isFull()).to.be.false;
    expect(b.size()).to.equal(0, "Size should be 0 when buffer is initialized");
  });

  it("Should throw error when trying to remove from a empty buffer", function(){
    expect(()=>{b.read()}).to.throw()
  });

  it("should peek at the right elements after writing to buffer",function(){
    for(i=0; i<bfrSize; i++){
      expect(b.write(testArray[i])).to.equal(i+1, "Should return the right size after writing to buffer");
      expect(testArray[i]).to.equal(b.peekAtWHdr(), "Peek at write head should always point at the newest element added");
      expect(b.peekAtRHdr()).to.equal(testArray[0], "Peek at read head should always point at the same number when writing, except if overflow is ");
    }
  });

  it("should peek at the right elements after reading from buffer",function(){
    for(i=0; i<bfrSize; i++){
      expect(b.peekAtRHdr()).to.equal(testArray[i], "Peek at read head should always point at next number when reading");
      expect(b.peekAtWHdr()).to.equal(testArray[bfrSize-1], "Peek at write head should always point at the newest element added");
      expect(b.read()).to.equal(testArray[i], "Should read the correct element from the buffer");
    }
  });

  it("check that the correct numbers are read after writing with overflow function enabled", function(){
    var overflowBuffer = new RingBuffer(bfrSize , true);
    testArray =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
    for(i=0; i<testArray.length; i++){
      expect(overflowBuffer.write(testArray[i])).to.equal(overflowBuffer.size(), "check if size returns the same as write when writing to buffer");
    }
    for(i=0; i<bfrSize; i++){
      expect(overflowBuffer.read()).to.equal(testArray[Math.round(testArray.length/2) + i], "The overflowed buffer does not seem to work correctly when reading from the buffer");
    }
  });
});
