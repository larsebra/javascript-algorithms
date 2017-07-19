import BinaryTreeNode from "../../Common/BinaryTreeNode.js";

/**
 *
 *                             ,--,
 *                          ,---.'|
 *   ,---,                  |   | :
 *  '  .' \            ,---.:   : |
 *  /  ;    '.         /__./||   ' :
 * :  :       \   ,---.;  ; |;   ; '
 * :  |   /\   \ /___/ \  | |'   | |__
 * |  :  ' ;.   :\   ;  \ ' ||   | :.'|
 * |  |  ;/  \   \\   \  \: |'   :    ;
 * '  :  | \  \ ,' ;   \  ' .|   |  ./
 * |  |  '  '--'    \   \   ';   : ;
 * |  :  :           \   `  ;|   ,/
 * |  | ,'            :   \ |'---'
 * `--''               '---"
 *
 * BinarSearchTree - AVL tree implemented as js class. A Binary search tree is a AVL tree iff for every node
 * the height difference of each respective nodes subtrees is only one. It uses a comparator function to compare
 * the objects that the tree concists of. See below for more details on the comparator function.
 *
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
export default class AVLTree {

  /**
   * constructor - Constructs a self balancing tree(AVL tree) and sets the comparator function, for more details on this
   * function see setCompareFunction below.
   *
   * @param  {Function} compareFunction sets the comparator used to compare objects in the tree
   */
  constructor(compareFunction){
    this._root = null;
    this._length = 0;
    this._comparator = compareFunction;
  }

  /**
   * push - description
   *
   * @param  {type} val description
   * @return {type}     description
   */
  push(val){
    //If tree is empty, just add and return
    if(this.isEmpty()){
      this._root = new BinaryTreeNode(val);
    }
    else{
      var nodeToAdd = new BinaryTreeNode(val);
      this._root = this._pushHelper(this._root, nodeToAdd);
    }

    this._length++;
    return this._length;
 }

 _pushHelper(root, newNode){
    //This variable contains the new root after/if rotated, otherwise current root is kept
    var newRoot = root;

    //Check which subtree to go down.
    //If new node is smaller than current node to add in go down left tree, but iff left subtree exists.
    if(this._comparator(newNode.getVal(), root.getVal()) <= 0){
      //Go down left subtree if it exists
      if(root.hasLeftChild()){
        var newLeftRoot = this._pushHelper(root.removeLeftChild(), newNode)
        root.setLeftChild(newLeftRoot);//This also sets the height
      }
      //Else just put the new node in place as left child of current node to add in
      else{
        root.setLeftChild(newNode);//This also sets the height
      }
    }
    //Else the new node must be larger, go down right subtree.
    else{
      //Go down right subtree if it exists
      if(root.hasRightChild()){
        var newRightRoot = this._pushHelper(root.removeRightChild(), newNode);
        root.setRightChild(newRightRoot);//This also sets the height
      }
      //Else just put the new node in place as right child of current node to add in
      else{
        root.setRightChild(newNode);//This also sets the height
      }
    }

    //After adding the node, check imbalance.
    //Check if left tree has a height greater than one compared to right subtree.
    if((root.leftHeight - root.rightHeight) > 1){
      //Check what rotation that needs to be done
      if(root.leftChild.leftHeight > root.leftChild.rightHeight){
        newRoot = this._rotateRight(root);
      }
      else{
        newRoot = this._rotateLeftRight(root);
      }
    }
    //Check if right tree has a height greater than one compared to the left tree.
    else if((root.rightHeight - root.leftHeight) > 1){
      //Check what rotation that needs to be done
      if(root.rightChild.rightHeight > root.rightChild.leftHeight){
        newRoot = this._rotateLeft(root);
      }
      else{
        newRoot = this._rotateRightLeft(root);
      }
    }
    return newRoot;
  }

  /**
   * _rotateRight - Rotate right if imbalance is in the left subtree
   * of the left child.
   *
   * @param  {BinaryTreeNode} tree the root of the subtree to rotate.
   * @return {BinaryTreeNode} the new root of the subtree;
   */
  _rotateRight(root){
    //Rotate Right. This will also recalculate heights
    var newRoot = root.removeLeftChild();
    root.setLeftChild(newRoot.removeRightChild());
    newRoot.setRightChild(root);

    return newRoot;
  }

  /**
  * _rotateRightLeft - Rotate right and then left  if imbalance is in the left subtree
  * of the right child.
  *
  * @param  {BinaryTreeNode} tree the root of the subtree to rotate.
  * @return {BinaryTreeNode} the new root of the subtree;
  */
  _rotateRightLeft(tree){
    var rightChildRoot = this._rotateRight(tree.removeRightChild());
    tree.setRightChild(rightChildRoot);
    return this._rotateLeft(tree);
  }

  /**
   * _rotateLeft - Rotate left if imbalance is in the right subtree
   * of the right child.
   *
   * @param  {BinaryTreeNode} tree the root of the subtree to rotate.
   * @return {BinaryTreeNode} the new root of the subtree;
   */
  _rotateLeft(root){
    var newRoot = root.removeRightChild();
    root.setRightChild(newRoot.removeLeftChild());
    newRoot.setLeftChild(root);
    return newRoot;
  }

  /**
  * _rotateLeftRight - Rotate left and then right if imbalance is in the left subtree
  * of the right child.
  *
  * @param  {BinaryTreeNode} tree the root of the subtree to rotate.
  * @return {undefined}      nothing.
  */
  _rotateLeftRight(root){
    var leftChildRoot = this._rotateLeft(root.getLeftChild());
    root.setLeftChild(leftChildRoot);
    return this._rotateRight(root);
  }

  /**
   * find - Uses the given comparator function, given at constructor or set by setCompare function, to
   * find the given value in the binary tree.
   *
   * @param  {Object} val The given val to search for
   * @return {Object}     Null if given value does not exists, otherwise object is returned
   */
  find(val){
    var result = this._findNodeHelper(this._root, val)
    if(result == null){
      return null;
    }
    return result.getVal();
  }

  /**
   * _findNodeHelper - Searches for the given value in the given tree.
   *
   * @param  {BinaryTreeNode} root The tree to search in.
   * @param  {Object} val  The given val to search for
   * @return {Object}      Null if given value does not exists, otherwise object is returned
   */
  _findNodeHelper(root, val){
    if(root == null){
      return null;
    }

    //Base case; node with value is found.
    if(this._comparator(val, root.getVal()) === 0){
      return root;
    }
    //Check which subtree to go down.
    //Go down left tree iff val is smaller
    if(this._comparator(val, root.getVal()) < 0){
      //Go down left subtree if it exists
      if(root.hasLeftChild()){
        return this._findNodeHelper(root.getLeftChild(), val);
      }
      else{
        //Node with value does not exist
        return null;
      }
    }
    //Else the new node must be larger, go down right subtree.
    else{
      //Go down right subtree if it exists
      if(root.hasRightChild()){
        return this._findNodeHelper(root.getRightChild(), val);
      }
      else{
        //Node with value does not exists
        return null;
      }
    }
  }

  /**
   * setCompareFunction - Sets the comparator of this binary tree, it uses this comparator
   * to compare two object to determine <, ===, > relation between the two.
   * The comparator function should have the following form: compare(a,b), and return a number; > 0, < 0 or 0.
   * compare(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
   * If inconsistent results are returned then the behaviour of the tree methods are undefined.
   *
   * @param  {Function} compareFunction The comparator to set
   * @return {void}     nothing
   */
  setCompareFunction(compareFunction){
    this._comparator = compareFunction;
  }

  /**
   * getHeight - Calculates the height of the tree. The height is longest path from the root to a leaf.
   *
   * @return {Number}  The height of the tree
   */
  getHeight(){
    return ((this._root.rightHeight > this._root.leftHeight)? this._root.rightHeight : this._root.leftHeight);
  }

  /**
   * isEmpty - Checks if the tree is empty or not.
   *
   * @return {Boolean}  true if empty, false otherwise.
   */
  isEmpty(){
    return (this._length === 0)? true : false;
  }

  /**
   * size - Returns the number of nodes in the tree.
   *
   * @return {type}  The number of nodes in the tree
   */
  size(){
    return this._length;
  }

}
