import Node from "./Node.js";

/**
 * Class representing binary tree node.
 */
export default class BinaryTreeNode extends Node{
  constructor(value){
    super(value);
    this.leftHeight = 0;
    this.rightHeight = 0;
    this.rightChild = null;
    this.leftChild = null;
  }

  /**
   * _findHeight - Private method for finding height of a binary tree. It just takes
   * the larger of the left child and the right child and returns it.
   *
   * @param {BinaryTreeNode} The tree to find the height of.
   * @return {Number}  The height of the given binary tree.
   */
  _findLargestHeight(root){
    if((root === null) || (root === undefined) || !(root instanceof BinaryTreeNode)){
        return 0;
    }
    return ((root.rightHeight > root.leftHeight)? root.rightHeight : root.leftHeight);
  }

  setLeftChild(node){
    if(!(node instanceof BinaryTreeNode) && !(node == null)){
      var e = new TypeError();
      e.message = "Expect a Binary tree node but got, " + typeof(node);
      throw e;
    }

    this.leftChild = node;

    if(node == null){
        this.setLeftHeight(0);
    }
    else{
      var leftHeight = this._findLargestHeight(node);
      this.setLeftHeight(leftHeight + 1);
    }
    return this.getLeftHeight();
  }

  getLeftChild(){
    return this.leftChild;
  }

  setRightChild(node){
    if(!(node instanceof BinaryTreeNode) && !(node == null)){
      var e = new TypeError();
      e.message = "Expect a Binary tree node but got, " + typeof(node);
      throw e;
    }

    this.rightChild = node;

    if(node == null){
        this.setRightHeight(0);
    }
    else{
      var rightHeight = this._findLargestHeight(node);
      this.setRightHeight(rightHeight + 1);
    }

    return this.getRightHeight();
  }

  getRightChild(){
    return this.rightChild;
  }

  setLeftHeight(h){
    this.leftHeight = h;
  }

  getLeftHeight(){
    return this.leftHeight;
  }

  setRightHeight(h){
    this.rightHeight = h;
  }

  getRightHeight(){
    return this.rightHeight;
  }

  removeLeftChild(){
    var leftChild = this.leftChild;
    this.leftChild = null;
    this.setLeftHeight(0);
    return leftChild;
  }

  removeRightChild(){
    var rightChild = this.rightChild;
    this.rightChild = null;
    this.setRightHeight(0);
    return rightChild;
  }

  hasLeftChild(){
    return (this.leftChild === null) ? false : true;
  }

  hasRightChild(){
    return (this.rightChild === null) ? false : true;
  }

  hasDecendants(){
    return (this.hasLeftChild() || this.hasRightChild()) ? true : false;
  }

}
