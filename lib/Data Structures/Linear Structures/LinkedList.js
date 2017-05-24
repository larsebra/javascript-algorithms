import ListNode from "./ListNode.js"

/**NOT FINISHED AND NOT TESTED
 * Class representing a list.
 * @todo make iterable if possible
 * @todo finish class, This class is not finished.
 */
class LinkedList{

  constructor(){
    this.first = null;
    this.last = null;
    this.count = 0;
    this.iterate = this.first;
  }

  addFirst(value){
    if(this.count === 0){
      this.last = this.first;
    }
    var newNode = new ListNode(value);
    newNode.setNext(this.first);
    this.first = newNode;
    this.count++;
    return this.count;
  }

  addLast(value){
    if(this.count === 0){
      return addFirst(value);
    }
    var newNode = new ListNode(value);
    this.last.setNext(newNode)
    this.count++;
    return this.count;
  }

  /**
   * removeFirst - removes the first item in the list
   *
   * @return {object}  the value of the first index in the list
   * @todo throw error when trying to remove a item from a empty list
   */
  removeFirst(){
    if(this.count === 0){
      return null;//Maybe throw an error
    }
    var temp = this.first;
    this.first = this.first.getNext();
    this.count--;
    return temp;
  }

  removeValue(value){

  }

  getValue(value){

  }

}

export default LinkedList;
