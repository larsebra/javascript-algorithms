/*
  Class representing a stack structure. The stack is using js array as base structure, and it
  also uses Arrays push and pop.
  @class
  @todo make it iterable;
*/
class Stack{
  /**
   * constructor - Creates an array as the base structure for the stack
   */
  constructor(){
    this.stack = [];
  }

  /**
     * pop - Pops off the last added element of the stack
     *
     * @return {Unknown} returns the element at the top off the stack
     * @throws {EmptyStackError} if array is empty
     */
  pop(){
    if(this.isEmpty()){
        var e = new Error();
        e.name = "EmptyStackError";
        e.message = "Cannot pop empty stack";
        throw e;
    }
    return this.stack.pop();
  }

  /**
   * push - Pushes an item to the top of the stack incrementing the size with one.
   *
   * @param {Object} item - the item to be added
   * @return {number} returns the new number of elements in the stack
   */
  push(item){
    return this.stack.push(item);
  }

  /**
   * top - Gets the length or the size of the stack
   *
   * @return {Number} returns the index of the top element
   */
  top(){
    return this.stack.length - 1;
  }

  /**
   * isEmpty - Checks if the stack is empty
   *
   * @return {Boolean} The index of the top element
   */
  isEmpty(){
    return (this.size() === 0) ? true : false;
  }

  /**
   * size - size of stack
   *
   * @return {Number} The size of the stack
   */
  size(){
    return this.stack.length;
  }

  /**
   * peek - see the first item on top. this does not alter the stack in any way.
   *
   * @return {Object}  the top of the stack
   * @throws EmptyStackError if stack is empty
   */
  peek(){
    if(this.isEmpty()){
      var e = new Error();
      e.name = "EmptyStackError";
      e.message = "Cannot peek, stack is empty";
      throw e;
    }
    var top = this.top();
    return this.stack[top];
  }

}

export default Stack;
