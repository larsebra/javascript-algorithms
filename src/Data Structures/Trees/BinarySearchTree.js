import BinaryTreeNode from "./BinarySearchTree.js";

/**
 * BinarSearchTree
 */
export default class BinarySearchTree {
  constructor(compareFunction){
    this.root = null;
    this.length = 0;
    this.comparator = compareFunction;
  }

  add(val){
    if(this.isEmpty()){
      this.root = new BinaryTreeNode();
    }
  }

  remove(val){
    if(this.isEmpty()){
      let e = new Error();
      e.name = "EmptyTreeError";
      e.message ="Tree is empty";
      throw e;
    }
  }

  find(val){

  }

  setCompareFunction(){

  }

  getHeight(){

  }

  isEmpty(){
    return (this.length === 0)?true:false;
  }

}
