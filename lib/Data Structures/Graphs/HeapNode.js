import Node from "../../Common/Node.js"

/**
 * Heap node representing a heapnode. This class is not finished yet. The class is under construction
 * @todo finish up HeapNode
 */
class HeapNode extends Node{
  constructor(){
    this.lc = null;
    this.rc = null;
  }

  /**
   * setLeft - sets left child
   *
   * @param  {HeapNode} lc The left child of this node
   * @return {void}    nothing
   */
  setLeft(lc){
    this.lc = lc;
  }

  /**
   * setRight - sets right child
   *
   * @param  {HeapNode} rc The right child of this node
   * @return {void}    nothing
   */
  setRight(rc){
    this.rc = rc;
  }

  getLeft(){
    return this.lc;
  }

  getRight(){
    return this.rc;
  }

}

export default HeapNode;
