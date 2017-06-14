
/**
 * Class representing a ring buffer. It uses an array of a given size as its base structure.
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
export default class RingBuffer{

  /**
   * constructor - initializes the variables used to hold the states.
   *
   * @param  {Number} size                 Sets the allowed size of the ring buffer.
   * @param  {Boolean} allowBufferOveflow  If set to true writehead can overwrite the elements that has not yet been read.
   */
  constructor(size, allowBufferOveflow){
    this.buffer = new Array(size).fill(null);
    this.wHdr = Math.round(size/2);//Just start in the middle
    this.rHdr = Math.round(size/2);
    this.count = 0;
    this.bufferOverwrite = allowBufferOveflow;
  }

  /**
   * Symbol.iterator - Make iterable. This is a generator used in for of loop to iterate over the collection
   *
   * @return {Object}  The list object starting at beginning and ending and list size()
   */
  *[Symbol.iterator](){
      let iter_next = this.rHdr;
      while(iter_next !== this.wHdr){
        yield this.buffer(iter_next);
        iter_next++
      }
  }

  write(element){
    if(this.isFull() && !this.bufferOverwrite){
      var e = new Error();
      e.name = "FullBufferError";
      e.message = "Cannot write to buffer, buffer is full";
      throw e;
    }
    this.buffer[this.wHdr] = element;
    this.incrWHdr();
    this.incrCount();
    return this.size()
  }

  read(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyBufferError";
      e.message = "Cannot read from buffer, buffer is empty";
      throw e;
    }
    var returnElement = this.buffer[this.rHdr];
    this.buffer[this.rHdr] = null; //Remove references. No memory leaks
    this.incrRHdr();
    this.decrCount();
    return returnElement;
  }

  incrWHdr(){
    this.wHdr++;
    this.wHdr = this.wHdr % this.buffer.length;
  }

  incrRHdr(){
    this.rHdr++;
    this.rHdr = this.rHdr % this.buffer.length;
  }

  incrCount(){
    if(!this.isFull()){
      this.count++;
    }
  }

  decrCount(){
    if(!this.isEmpty()){
      this.count--;
    }
  }

  peekAtRHdr(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyBufferError";
      e.message = "Cannot peak, buffer is empty";
      throw e;
    }
    return this.buffer[this.rHdr];
  }

  peekAtWHdr(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyBufferError";
      e.message = "Cannot peak, buffer is empty";
      throw e;
    }
    var index = (this.wHdr === 0) ? (this.buffer.length - 1): (this.wHdr -1);
    return this.buffer[index];
  }

  size(){
    return this.count;
  }

  isEmpty(){
    return (this.count === 0)? true: false;
  }

  isFull(){
    return (this.buffer.length === this.count)? true: false;
  }
}
