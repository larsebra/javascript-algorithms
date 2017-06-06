/**
 * Class representing a queue. It uses an array of given size as base structure.
 * This queues is implemented as a circular array or ring buffer using modulus arithmetic. It is faster than using Array class
 * native methods(Push and shift) for queueing an enqueueing. There is one limitiation however, the queues size is finite, it
 * has the size of the given value, this size is given to the constructor. It is called queue because this is, as for now, the
 * standard linear queue of the lib.
 */
export class Queue{
 /**
  * constructor - makes a array as a base structure. The queue becomes as big as the size of the array
  *
  * @param  {Number} number The size of the queue
  */
 constructor(size){
   this.q = new Array(size);
   this.firstPtr = 0;
   this.lastPtr = 0;
   this.lPtrOverlap = false;
   this.fPtrOverlap = true;
 }

 /**
  * enqueue - Adds an element to the end of the queue
  *
  * @param  {Object} item to enqueue
  * @throws {FullQueueError} if queue is full
  * @return {number} The size of the new queue
  */
 enqueue(item){
   if(this.isFull()){
     var e = new Error();
     e.name = "FullQueueError";
     e.message = "Cannot enqueue, queue is full";
     throw e;
   }
   else{
     this.q[this.lastPtr] = item;
     this.lastPtr++;
     this.lastPtr = (this.lastPtr % this.q.length);
     if(this.isEmpty()){//If it is empty one more element has been added mark as not empty
       this.fPtrOverlap = false;
     }
     else if(this.lastPtr === this.firstPtr){
       this.lPtrOverlap = true;
     }
     return this.size();
   }
 }

 /**
  * dequeue - dequeues the first item in the queue
  *
  * @return {Object}  The first object in the queue
  * @Throws {EmptyQueueError} if array is empty.
  */
 dequeue(){
   if(this.isEmpty()){
     var e = new Error();
     e.name = "EmptyQueueError";
     e.message = "Cannot dequeue, queue is empty";
     throw e;
   }
   else{
     var temp = this.q[this.firstPtr];
     this.firstPtr++;
     this.firstPtr = (this.firstPtr % this.q.length);
     if(this.isFull()){//If it is full dequeue has made room for one more element; Mark not full
       this.lPtrOverlap = false;
     }
     else if(this.firstPtr === this.lastPtr){
       this.fPtrOverlap = true;
     }
     return temp;
   }
 }

 /**
  * peek - peeks at the first element in line
  *
  * @return {Object}  returns the first element in line.
  * @throws {EmptyQueueError} throws this if queue is empty
  */
 peek(){
   if(this.isEmpty()){
     var e = new Error();
     e.name = "EmptyQueueError";
     e.message = "Cannot peek, queue is empty";
     throw e;
   }
   return this.q[this.firstPtr];
 }

 /**
  * size - gets the size of the queue.
  *
  * @return {Number}  size of the queue.
  */
 size(){
   if(this.lastPtr < this.firstPtr){
     var s1 = this.q.length - this.firstPtr;
     var s2 = this.lastPtr;
     return (s1 + s2);
   }
   else if(this.isFull()){
     return this.q.length;
   }
   else{
     return (this.lastPtr - this.firstPtr);
   }

 }

 /**
  * isEmpty - Checks if q is empty
  *
  * @return {Boolean} The index of the top element
  */
 isEmpty(){
   return this.fPtrOverlap;
 }

 /**
  * isFull - Checks if q is full.
  *
  * @return {Boolean}  true if q is full, else false;
  */
 isFull(){
   return this.lPtrOverlap;
 }
}

/**
 * Class representing a queue. This representation uses an array as base structure, it uses js native unshift and pop for
 * enqueueing and dequeueing. This implementation is very slow, due to use of unshift and pop, particularly the unshift method.
 * Should not be used when performance is important, use Queue, a circular buffer queue instead. However this class does not have
 * any limitiations on how many elements there can be in the list.
 * @class
 */
export class QueueAsNativeArray{

  /**
   * constructor - makes a array as a base structure
   */
  constructor(){
    this.q = [];
  }

  /**
   * enqueue - enqueues at the end of the queue
   *
   * @param  {Object} item to enqueue
   * @return {number} The size of the new queue
   */
  enqueue(item){
    return this.q.unshift(item);
  }

  /**
   * dequeue - dequeues the first item in the queue
   *
   * @return {Object}  The first object in the queue
   * @todo throw error when empty
   */
  dequeue(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyQueueError";
      e.message = "Cannot dequeue, queue is empty";
      throw e;
    }
    return this.q.pop();
  }

  /**
   * peek - peeks at the first element in line
   *
   * @return {Object}  returns the first element in line.
   */
  peek(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyQueueError";
      e.message = "Cannot peek, queue is empty";
      throw e;
    }
    return this.q[this.q.length - 1];
  }

  /**
   * size - gets the size of the queue.
   *
   * @return {number}  size of the queue.
   */
  size(){
    return this.q.length;
  }

  /**
   * isEmpty - Checks if the stack is empty
   *
   * @return {Boolean} The index of the top element
   */
  isEmpty(){
    return (this.q.length === 0) ? true : false;
  }
}
