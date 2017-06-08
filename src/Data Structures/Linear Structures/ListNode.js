import Node from "../../Common/Node.js"

class ListNode extends Node {

  /**
   * constructor - description
   *
   * @param  {Object} value The value this node represents
   * @return {type}       description
   */
  constructor(value, next){
    super(value);
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
