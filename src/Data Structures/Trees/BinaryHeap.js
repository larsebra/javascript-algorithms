import swap from "../../Common/Swap.js";
/**
 * Heap implemented with an array. It can either be a binary min heap or a binary max heap.
 * Chosing between min heap or max heap is done by passing comparator function to the constructor that returns a boolean value.
 *
 * The comparator function should have the following form: compare(a,b), and return a number; > 0, < 0 or 0.
 * If min value at root is wanted, compare(a, b) must yield a number < 0, this will move a higher up the tree.
 * If max value at root is wanted, compare(a, b) must yield a number > 0, this will move a down the tree.
 * If compare(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements
 * compare(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
 * If inconsistent results are returned then the heap order is undefined.
 *
 * @class
 * @todo test class and all methods, make exceptions where it is needed
 * @todo balance the tree when adding
 */
export default class BinaryHeap{
  /**
   * constructor - The comparator function determines if the heap is a
   * binary minimum heap or a binary maximum heap. This is done by correctly
   * returning true or false in the comparator function.
   * If max heap is wanted write a comparator function that returns 1 if a < b.
   * If min heap is wanted write a comparator function that returns -1 if a > b.
   *
   * @param  {Function} comparator function used to compare
   * @return {type}            description
   */
  constructor(size, comparator){
    this.heap = new Array(size).fill(null);

    //Using a separate length property from the arrays class
    this.length = 0;

    //The heaps comarator function used to compare objects in the heap.
    this.comparator = comparator;
  }

  /**
   * add - Adds a new element to the heap.
   *
   * @param  {Node} node The node to add.
   * @return {Number}     The new size of heap.
   * @throws {FullHeapError} if heap is full.
   * @todo throw something when input is bad
   */
  add(element){
    if(this.isFull()){
      var e = new Error();
      e.name = "FullHeapError";
      e.message = "Cannot peek at root, heap is empty";
      throw e;
    }

    if(element === null || element === undefined){
      //Throw something
      var e = new Error();
      e.name = "UndefinedError";
      e.message = "Cannot add undefined values to the heap.";
      throw e;
    }

    //Put the new element last in the array and the heap.
    this.heap[this.length] = element;

    //If heap was empty just return the new length
    if(this.length === 0){
      this.length++;
      return this.length;
    }

    //The index of the new element
    var child = this.length;

    //Get the parent of the newly added element
    var parent = this.getParentOf(child);

    //Now, swap the newly added element up til the heap property is valid again.
    while((parent >= 0) && (this.comparator(this.heap[child], this.heap[parent]) < 0)){
      swap(this.heap, child, parent);
      child = parent;
      parent = this.getParentOf(child);
    }

    //Increment the size of the heap and return the new value.
    this.length++;
    return this.length;
  }

  /**
   * remove - removes the root node and restores the heap property.
   *
   * @return {Obect}  returns the root node.
   * @throws {EmptyHeapError} When heap is empty.
   */
  remove(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyHeapError";
      e.message = "Cannot remove root, heap is empty";
      throw e;
    }

    //Get the value of the root node and return this value at the end.
    var rootVal = this.heap[0];

    //Find the last element
    var lastElement = this.length -1;

    //Get the last added node in the heap and put it at root for swapdown
    this.heap[0] = this.heap[lastElement];

    //Remove any references maybe
    //this.heap[lastElement] = null;

    //Initialize variables used in swapping
    var parent = 0;
    var leftChild = 0;
    var rightChild = 0;

    //This variable contain the route to swap the parent down from
    var swapDownChild = 0;

    //Swap child with highest of the two children
    while(true){

      //Get the children of the new parent.
      leftChild = this.getLeftChildOf(parent);
      rightChild = this.getRightChildOf(parent);

      //Check indexes of children.
      //If rightChild is out of bounds, check if left also is out of bounds
      if(!(rightChild < this.length)){
        //Check if both cildren are out of boundary, no need to continue swapping
        if(!(leftChild < this.length)){
          break;
        }
        else{
          //Just swap down the left child
          swapDownChild = leftChild;
        }
      }
      else{
        //Find the larger child.
        swapDownChild = (this.comparator(this.heap[leftChild], this.heap[rightChild]) < 0) ? leftChild: rightChild;
      }

      //Check if heap property is not valid.
      if(this.comparator(this.heap[swapDownChild], this.heap[parent]) < 0){
        swap(this.heap, parent, swapDownChild);
      }
      else{
        //Exit the loop, the heap property is valid.
        break;
      }

      //After swapping, the new parent must be set.
      parent = swapDownChild;
    }

    //Decrement the size of the array and return the root.
    this.length--;
    return rootVal;
  }

  /**
   * getParentOf - Gets the parent index of the given index
   *
   * @param  {Number} index The child index
   * @return {Number}       The index of parent
   */
  getParentOf(index){
    if(index === 0){
      return 0;
    }
    var parentIndex = Math.ceil(index / 2) - 1;
    return parentIndex;
  }

  /**
   * getLeftChildOf - Gets the index/position of the left child of the given parent
   *
   * @param  {Number} index The index of the parent
   * @return {Number}       The index of the left child
   * @todo proove the correctnes of calculation of left child
   */
  getLeftChildOf(index){
    var childIndex = (index * 2) + 1;
    return childIndex;
  }

  /**
   * getRightChild - Gets the index/position of the right child of the given parent
   *
   * @param  {Number} index The index of the parent
   * @return {Number}       The right child.
   * @todo proove the correctnesst of the calculation of right child
   */
  getRightChildOf(index){
    var childIndex = (index * 2) + 2;
    return childIndex;
  }

  /**
   * peek - Returns the root node, but does not remove it.
   * Whether it is max or min depends on the comparator function.
   *
   * @return {type}  The root node of the heap.
   * @throw heap empty error or something when empty
   */
  peek(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyHeapError";
      e.message = "Cannot peek at root, heap is empty";
      throw e;
    }
    return this.heap[0];
  }

  /**
   * isEmpty - description
   *
   * @return {Boolean}  return true if empty, false otherwise
   */
  isEmpty(){
    if(this.length === 0){
      return true;
    }
    else{
      return false;
    }
  }

  /**
   * isEmpty - description
   *
   * @return {Boolean}  return true if empty, false otherwise
   */
  isFull(){
    if(this.length === this.heap.length){
      return true;
    }
    else{
      return false;
    }
  }

  /**
   * size - The size of the heap
   *
   * @return {Number}  The size of the heap.
   */
  size(){
    return this.length;
  }

  /**
   * toString - Makes the whole tree readable in the console
   *
   * @return {String}  Nice string representing the heap.
   * @todo write the function.
   */
  toString(){
    return ""
  }

  /**
   * The old array is removed by pointing the heap array variable to referencing a new array,
   * if array is not referenced by outside objects, the garbage collector will remove it from memory, and there should not, be any
   * memory leakage.
   *
   * @return {void}  returns nothing
   */
  empty(){
    this.heap.fill(null);
    this.length = 0;
  }
}
