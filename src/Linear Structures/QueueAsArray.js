/**
 * Class representing a queue. This representation uses an array as base structure, it uses js native unshift and pop for
 * enqueueing and dequeueing. This implementation is a bit slow, due to use of unshift and pop, particularly the unshift method.
 * Should not be used when performance is important, use Queue, a circular buffer queue instead. However this class does not have
 * any limitiations on how many elements there can be in the list, other than the limitations on the native Array object itself.
 * It is not a plan to maintain this structure in the future, but as it is now it works fine.
 * @class
 */
export default class QueueAsArray{

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
  peekFirst(){
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
