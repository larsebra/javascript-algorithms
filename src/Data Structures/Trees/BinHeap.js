import swap from "../../Common/Swap.js";
/**
 * Heap implemented with an array. It can either be a binary min heap or a binary max heap.
 * Chosing between min heap or max heap is done by passing comparator function to the constructor that returns a boolean value.
 * If max heap is wanted write a comparator function that returns true if a > b, false otherwise.
 * If min heap is wanted write a comparator function that returns true if a < b, false otherwise.
 * @class
 * @todo test class and all methods, make exceptions where it is needed
 * @todo add support for comparator function
 */
class BinHeap{
  /**
   * constructor - The comparator function determines if the heap is a
   * binary minimum heap or a binary maximum heap. This is done by correctly
   * returning true or false in the comparator function.
   * If max heap is wanted write a comparator function that returns true if a < b, false otherwise.
   * If min heap is wanted write a comparator function that returns true if a > b, false otherwise.
   *
   * @param  {Func} comparator function used to compare
   * @return {type}            description
   * @todo Throw something usefull
   */
  constructor(comparator){
    this.heap = [];
    this.comparator = comparator;
  }

  /**
   * add - description
   *
   * @param  {Node} node The node to add.
   * @return {Number}     The new size of heap.
   * @todo throw something when input is bad
   */
  add(node){
    if(node === null || node === undefined){
      //Throw something
    }
    this.heap.push(node);
    var child = this.size() - 1;
    var parent = this.getParentOf(child);
    while(child !== parent && this.comparator(this.heap[child], this.heap[parent])){
      swap(this.heap, child, parent);
      child = parent;
      parent = this.getParentOf(child);
    }
    return this.heap.lenght;
  }

  /**
   * remove - removes the root node
   *
   * @return {Node}  returns the root node.
   * @throws {EmptyHeapError} When heap is empty.
   */
  remove(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyHeapError";
      e.message = "Cannot remove root, heap is empty";
      throw e;
    }
    if(this.size() === 1){
      return this.heap.pop();
    }
    var returnRoot = this.heap[0];
    this.heap[0] = this.heap.pop();
    var parent = 0;
    var leftChild = this.getLeftChildOf(0);
    var rightChild = this.getRightChildOf(0);

    while(true){
      if((this.size() > leftChild) &&
          this.comparator(this.heap[leftChild], this.heap[parent]) &&
         (!(this.size() > rightChild) ||
          this.comparator(this.heap[leftChild], this.heap[rightChild]))){
        swap(this.heap, parent, leftChild);
        parent = leftChild;
      }
      else if((this.size() > rightChild) &&
              this.comparator(this.heap[rightChild], this.heap[parent])){
        swap(this.heap, parent, rightChild);
        parent = rightChild;
      }
      else {
        break;
      }
      leftChild  = this.getLeftChildOf(parent);
      rightChild = this.getRightChildOf(parent);
    }
    return returnRoot;
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
    if(this.isEmpty()){
      //Throw
    }
    return this.heap[0];
  }
  /**
   * isEmpty - description
   *
   * @return {Boolean}  return true if empty, false otherwise
   */
  isEmpty(){
    if(this.heap.length === 0){
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
    return this.heap.length;
  }

  /**
   * toString - Makes the whole tree readable in the console
   *
   * @return {String}  Nice string representing the heap.
   * @todo write the function.
   */
  toString(){
    return this.heap.toString();
  }

  /**
   * The old array is removed by pointing the heap array variable to referencing a new array,
   * if array is not referenced by outside objects, the garbage collector will remove it from memory, and there should not, be any
   * memory leakage.
   *
   * @return {void}  returns nothing
   */
  empty(){
    this.heap = []; //referencing a new array, garbage collection should pick the old array up and remove it.
  }
}

export default BinHeap;
