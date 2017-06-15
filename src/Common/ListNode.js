import Node from "./Node.js"

class ListNode extends Node {

  /**
   * constructor - Sets next and value for this node
   *
   * @param  {Object} value value
   * @param  {DoubleLinkedListNode} next  next pointer
   * @return {Void}       nothing
   */
  constructor(value, next){
    super(value);
    this.next = null;
    this.setNext(next);
  }

  /**
   * setNext - sets next element
   *
   * @param  {ListNode} next The next node in the list
   * @return {ListNode}      description
   */
  setNext(next){
    this.next = next;
  }

  /**
   * getNext - returns the next pointer
   *
   * @return {ListNode}  returns the next node in line.
   */
  getNext(){
    return this.next;
  }
}

export default ListNode;
