import ListNode from "./ListNode.js";

export default class DoubleLinkedListNode extends ListNode{

  /**
   * constructor - Sets prev next and value for this node
   *
   * @param  {Object} value value
   * @param  {DoubleLinkedListNode} prev  previous pointer
   * @param  {DoubleLinkedListNode} next  next pointer
   * @return {Void}       nothing
   */
  constructor(value, prev, next){
    super(value, next);
    this.prev = null;
    this.setPrev(prev);
  }

  /**
   * setPrev - sets prev element ptr
   *
   * @param  {ListNode} next The next node in the list
   * @return {void}      nothing
   */
  setPrev(prev){
    this.prev = prev;
  }

  /**
   * getNext - returns the next pointer
   *
   * @return {ListNode}  returns the next node in line.
   */
  getPrev(){
    return this.prev;
  }
}
