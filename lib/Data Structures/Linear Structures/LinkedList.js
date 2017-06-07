import ListNode from "./ListNode.js"

/**
 * Class representing a single linked list.
 * @todo make iterable if possible
 * @todo make toString
 */
export default class LinkedList{

  constructor(){
    this.first = null;
    this.last = null;
    this.count = 0;
    this.iterate = this.first;
  }

  /**
   * addFirst - adds element first in the list
   *
   * @param  {Object} element The element to add.
   * @return {Number}         The new size of the list
   */
  addFirst(element){
    if(this.size() === 0){
      this.first = new ListNode(element, null);
      this.last = this.first;
    }
    else{
      var prevFirst = this.first;
      this.first = new ListNode(element, prevFirst);
    }
    this.count++;
    return this.size();
  }

  /**
   * addLast - Adds an element last in the list
   *
   * @param  {Object} element The element to add.
   * @return {Number}         The new size of the list
   */
  addLast(element){
    if(this.size() === 0){
      this.first = new ListNode(element, null);
      this.last = this.first;
    }
    else{
      var prevLast = this.last;
      this.last = new ListNode(element, null);
      prevLast.setNext(this.last);
    }
    this.count++;
    return this.size();
  }

  /**
   * removeFirst - removes the first element from the list, and returns it.
   *  The next element in line becomes the first element in the list.
   *
   * @return {Object}  The first object in the list.
   * @throws EmptyListError
   */
  removeFirst(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyListError";
      e.message = "Cannot remove element, list is empty";
      throw e;
    }
    var prevFirst = this.first;
    this.first = prevFirst.getNext();
    prevFirst.setNext(null);//remove references.
    var returnVal = prevFirst.getVal();
    prevFirst.setVal(null); //remove references.
    this.count--;
    return returnVal;
  }

  /**
   * peekFirst - Peeks at the first element in the list and returns it.
   *  This does not alter the list in any way.
   *
   * @return {Object}  The first element in the list.
   * @throws EmptyListError
   */
  peekFirst(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyListError";
      e.message = "Cannot peek, list is empty";
      throw e;
    }
    return this.first.getVal();
  }

  /**
   * peekLast - Peeks at the last element in the list and returns it.
   * This method does not alter the list in anyway
   *
   * @return {type}  description
   * @throws EmptyListError
   */
  peekLast(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyListError";
      e.message = "Cannot peek, list is empty";
      throw e;
    }
    return this.last.getVal();
  }

  /**
   * isEmpty - Check if the list is empty.
   *
   * @return {Boolean}  true if empty, else false.
   */
  isEmpty(){
    return (this.count === 0) ? true: false;
  }

  /**
   * size - returns the number of elements in the list
   *
   * @return {Number}  number of elements in the list
   */
  size(){
    return this.count;
  }

  toString(){

  }
}
