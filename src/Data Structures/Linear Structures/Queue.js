import RingBuffer from "./RingBuffer"
/**
 * Class representing a queue. It uses an array of given size as base structure.
 * This queues is implemented as using the RingBuffer class.
 * It is faster than using Array class native methods(Push and shift) for queueing an enqueueing.
 * There is one limitiation however, the queues size is finite, it has the size of the given input size at initialization,
 * this size is given to the constructor. It is called queue because this is, as for now, the standard
 * linear queue of the lib.
 *
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
export default class Queue{
 /**
  * constructor - makes a array as a base structure. The queue becomes as big as the size of the array
  *
  * @param  {Number} number The size of the queue
  */
 constructor(size){
   this.q = new RingBuffer(size,false);
   this[Symbol.iterator] = this.q[Symbol.iterator].bind(this.q);
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
   return this.q.write(item)
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
   return this.q.read();
 }

 /**
  * peekFirst - peeks at the first element in line
  *
  * @return {Object}  returns the first element in line.
  * @throws {EmptyQueueError} throws this if queue is empty
  */
 peekFirst(){
   if(this.isEmpty()){
     var e = new Error();
     e.name = "EmptyQueueError";
     e.message = "Cannot peek, queue is empty";
     throw e;
   }
   return this.q.peekAtRHdr();
 }

 /**
  * peekLast - peeks at the last element in line
  *
  * @return {Object}  returns the last element in line.
  * @throws {EmptyQueueError} throws this if queue is empty
  */
 peekLast(){
   if(this.isEmpty()){
     var e = new Error();
     e.name = "EmptyQueueError";
     e.message = "Cannot peek, queue is empty";
     throw e;
   }
   return this.q.peekAtWHdr();
 }

 /**
  * isEmpty - checks if q is empty
  *
  * @return {Boolean}  returns true if it is empty, else false.
  */
 isEmpty(){
   return this.q.isEmpty();
 }

 /**
  * isFull - checks if q is full
  *
  * @return {Boolean}  returns true if it is full, false else
  */
 isFull(){
   return this.q.isFull();
 }

 /**
  * size - size of the queue.
  *
  * @return {Number}  Number of elements currently in the queue
  */
 size(){
   return this.q.size();
 }

}
