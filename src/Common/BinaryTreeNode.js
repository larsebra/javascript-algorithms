import Node from "./Node.js";

export default class BinaryTreeNode extends Node{
  constructor(value){
    super(value);
    this.rightChild = null;
    this.leftChild = null;
  }

  setLeftChild(node){
    this.leftChild = node;
  }

  setRightChild(node){
    this.rightChild = node;
  }
}
