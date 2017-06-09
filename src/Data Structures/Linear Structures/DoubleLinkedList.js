import DoubleLinkedListNode from "./DoubleLinkedListNode.js";
/**
 * Class representing a double linked list.
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
    var newNode = new DoubleLinkedListNode(element, null,null);

    if(this.size() === 0){
      //New element points to itself, if list has one element
      newNode.setNext(newNode);
      newNode.setPrev(newNode);

      //First and last references points to the first element,
      //when list has one element
      this.first = newNode;
      this.last = this.first;
    }
    else{
      //Temp var
      var prevFirst = this.first;

      //Make first pointer to point to new element.
      this.first = newNode;

      //Set references of first and last in list
      prevFirst.setPrev(newNode);
      this.last.setNext(newNode);

      //Set references of new element
      newNode.setNext(prevFirst);
      newNode.setPrev(this.last);

    }

    //Increment number of elements, and return the new size.
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
    var newNode = new DoubleLinkedListNode(element, null,null);

    if(this.size() === 0){
      //New element points to itself, if list has one element
      newNode.setNext(newNode);
      newNode.setPrev(newNode);

      //First and last references points to the first element,
      //when list has one element
      this.first = newNode;
      this.last = this.first;
    }
    else{
      //Temp variable
      var prevLast = this.last;

      //Make first pointer to point to new element.
      this.last = newNode;

      //Set references of first and last in list
      prevLast.setNext(newNode);
      this.first.setPrev(newNode);

      //Set references of new element
      newNode.setPrev(prevLast);
      newNode.setNext(this.first);
    }

    //Increment number of elements, and return the new size.
    this.count++;
    return this.size();
  }

  /**
   * addInPosition - Adds an element in given position. The given index
   * must be within the range of the size(), 0 =< index =< size(), otherwise
   * an error is thrown. One can add an element at last position + one in the
   * list, but it is not possible to add an element at position > one + lastindex.
   * This method does not remove any elements, rather it
   * moves the previous element at index position one step further.
   * In effect, the old element, will have position index + 1, where index is
   * the given index as parameter.
   *
   * Complexity:
   *  -Worstcase: O(n), where n is the index number
   *  -Bestcase: O(n), where n is the index number
   *  -Average: O(n), where n is the index number
   *
   * @param  {Object} element The element to add.
   * @param  {Number} index   The number
   * @return {Number}         The new size, if everything was ok.
   *
   * @throws {IndexOutOfBoundsError}
   */
  addInPosition(val, index){
    if(!((0 <= index) && (index <= this.size()))){
      var e = new Error();
      e.name = "IndexOutOfBoundsError";
      e.message = "Cannot add element in index "+ index +", current list size are " + this.size();
      throw e;
    }

    //If adding in the first position, just call add first
    if(index === 0){
      return this.addFirst(val);
    }

    //If adding in after last position, just call add last
    if(index === this.size()){
      return this.addLast(val);
    }

    //Get element at index.
    var oldElementAtPos = this.getAtPosition(index);

    //Set pointer for the new element
    var newElement = new DoubleLinkedListNode(val,
                              oldElementAtPos.getPrev(),
                              oldElementAtPos);

    //Set the next reference of previous relative to new node.
    oldElementAtPos.getPrev().setNext(newElement);

    //Set pointer of the old element.
    oldElementAtPos.setPrev(newElement);

    //Increment number of elements, and return the new size.
    this.count++;
    return this.size();
  }

  /**
   * getAtPosition - Finds the element at given position, and returns it.
   * The index values start at 0 and ends at size() - 1.
   *
   * Complexity:
   *  -Worstcase: O(n), where n is the index number
   *  -Bestcase: O(n), where n is the index number
   *  -Average: O(n), where n is the index number
   *
   * @param  {Number} index The given index, must be within bounds.
   * @return {Object}       Element at given position.
   */
  getAtPosition(index){
    if(!((0 <= index) && (index < this.size()))){
      var e = new Error();
      e.name = "IndexOutOfBoundsError";
      e.message = "Cannot get element in index "+ index +", current list size are " + this.size();
      throw e;
    }
    var nextElement = this.first;
    var i = 0;
    while(i < index){
      nextElement = nextElement.next;
      i++;
    }
    return nextElement;
  }

  /**
   * getValAtPosition - Finds the element at given position, and returns the value.
   * The index values start at 0 and ends at size() - 1.
   *
   * Complexity:
   *  -Worstcase: O(n), where n is the index number
   *  -Bestcase: O(n), where n is the index number
   *  -Average: O(n), where n is the index number
   *
   * @param  {Number} index The given index, must be within bounds.
   * @return {Object}       value at given position.
   */
  getValAtPosition(index){
    if(!((0 <= index) && (index < this.size()))){
      var e = new Error();
      e.name = "IndexOutOfBoundsError";
      e.message = "Cannot get element in index "+ index +", current list size are " + this.size();
      throw e;
    }
    var nextElement = this.first;
    var i = 0;
    while(i < index){
      nextElement = nextElement.next;
      i++;
    }
    return nextElement.getVal();
  }

  /**
   * removeFirst - removes the first element from the list, and returns it.
   * The next element in line becomes the first element in the list, if there
   * are any elements left.
   *
   * @return {Object}  The first object in the list.
   * @throws {EmptyListError}
   */
  removeFirst(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyListError";
      e.message = "Cannot remove element, list is empty";
      throw e;
    }

    var prevFirst = this.first;
    var returnVal = prevFirst.getVal();

    //If one element left, just return the value and reset pointers.
    if(this.size() === 1){
      this.first = null;
      this.last = null;
    }
    else{
      //Set first to reference next element in line.
      this.first = prevFirst.getNext();

      //Change references of first and last element.
      this.first.setPrev(this.last);
      this.last.setNext(this.first);
    }

    //Remove references
    prevFirst.setNext(null);
    prevFirst.setPrev(null);

    //Decrement size and return value.
    this.count--;
    return returnVal;
  }

  /**
   * removeLast - removes the last element from the list, and returns it.
   * The previous element of last element becomes the new last element in
   * the list, if there are any elements left.
   *
   * @return {Object}  The last object in the list.
   * @throws {EmptyListError}
   */
  removeLast(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyListError";
      e.message = "Cannot remove element, list is empty";
      throw e;
    }

    var prevLast = this.last;
    var returnVal = prevLast.getVal();

    //If one element left, just return the value and reset pointers.
    if(this.size() === 1){
      return this.removeFirst();
    }
    else{
      //Set first to reference next element in line.
      this.last = prevLast.getPrev();

      //Change references of first and last element.
      this.first.setPrev(this.last);
      this.last.setNext(this.first);
    }

    //Remove references
    prevLast.setNext(null);
    prevLast.setPrev(null);

    //Decrement size and return value.
    this.count--;
    return returnVal;
  }

  /**
   * removeAtPosition - Removes and returns the element at the given index.
   * The given index must be in the bounds of the size() of the list; 0 <= index
   * < size().
   *
   * @param  {Integer} index The index of the element to remove.
   * @return {Object}       The object to remove.
   */
  removeAtPosition(index){
    if(!(0 <= index) && !(index < this.size())){
      var e = new Error();
      e.name = "IndexOutOfBoundsError";
      e.message = "Cannot remove element at index "+ index +", must be within bounds";
      throw e;
    }

    //If removing the first position, just call add first
    if(index === 0){
      return this.removeFirst();
    }

    //If removing the last position, just call remove first
    if(index === (this.size() - 1)){
      return this.removeLast();
    }

    //Get element at index.
    var oldElementAtPos = this.getAtPosition(index);
    var returnVal = oldElementAtPos.getVal();

    //Set the next reference of previous relative to new node.
    oldElementAtPos.getPrev().setNext(oldElementAtPos.getNext());
    oldElementAtPos.getNext().setPrev(oldElementAtPos.getPrev());

    //Remove references
    oldElementAtPos.setPrev(null);
    oldElementAtPos.setNext(null);

    //Decrement number of elements, and return the value of the old element.
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
