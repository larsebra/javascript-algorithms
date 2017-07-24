import {expect} from "chai";
import {randomArrayGenerator } from "./test-tools/Arrays.js";
import AVLTree from "../src/Data Structures/Trees/AVLTree.js";
import BinaryTreeNode from "../src/Common/BinaryTreeNode.js";

describe("AVLTree", function(){
  var compareFunction = function(a,b){
    if(a<b){
      return -1;
    }
    else if( a > b){
      return 1;
    }
    else{
      return 0;
    }
  }
  var tree = new AVLTree(compareFunction);

  it("Rigth right rotatation", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Left subtree
    var lc = new BinaryTreeNode(8);
    var lclc = new BinaryTreeNode(6);
    var lcrc = new BinaryTreeNode(9);
    var lclclc = new BinaryTreeNode(3);

    //Right subtree
    var rc = new BinaryTreeNode(15);

    //Make the tree
    root.setLeftChild(lc);
    root.setRightChild(rc);

    //Make left subtree of root.
    lc.setLeftChild(lclc);
    lc.setRightChild(lcrc);
    lclc.setLeftChild(lclclc);

    var newRoot = tree._rotateRight(root);

    //Test if new root is correct.
    expect(Object.is(newRoot, lc)).to.be.true;

    //Test left subtree
    expect(Object.is(newRoot.getLeftChild(), lclc)).to.be.true;
    expect(Object.is(lclc.getLeftChild(), lclclc)).to.be.true;

    //Test Right subtree
    expect(Object.is(newRoot.getRightChild(), root)).to.be.true;
    expect(Object.is(root.getLeftChild(), lcrc)).to.be.true;
  });

  it("Left left rotatation", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Left subtree
    var lc = new BinaryTreeNode(8);

    //Right subtree
    var rc = new BinaryTreeNode(15);
    var rclc = new BinaryTreeNode(13);
    var rcrc = new BinaryTreeNode(17);
    var rcrcrc = new BinaryTreeNode(19);

    //Make the tree
    root.setLeftChild(lc);
    root.setRightChild(rc);

    //Make right subtree of root.
    rc.setLeftChild(rclc);
    rc.setRightChild(rcrc);
    rcrc.setRightChild(rcrcrc);

    var newRoot = tree._rotateLeft(root);

    //Test root
    expect(Object.is(newRoot, rc)).to.be.true;

    //Test left subtree.
    expect(Object.is(newRoot.getLeftChild(), root)).to.be.true;
    expect(Object.is(root.getLeftChild(), lc)).to.be.true;
    expect(Object.is(root.getRightChild(), rclc)).to.be.true;

    //Test right subtree.
    expect(Object.is(newRoot.getRightChild(), rcrc)).to.be.true;
    expect(Object.is(rcrc.getRightChild(), rcrcrc)).to.be.true;
  });

  it("Simple Right left rotatation", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Left subtree
    var rc = new BinaryTreeNode(15);
    var rclc = new BinaryTreeNode(13);

    //Make the tree
    root.setRightChild(rc);

    //Make left subtree of root.
    rc.setLeftChild(rclc);

    var newRoot = tree._rotateRightLeft(root);

    expect(Object.is(newRoot, rclc)).to.be.true;
    expect(Object.is(newRoot.getLeftChild(), root)).to.be.true;
    expect(Object.is(newRoot.getRightChild(), rc)).to.be.true;
  });

  it("Advanced Right left rotatation", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Left subtree
    var lc = new BinaryTreeNode(5);

    //Right subtree
    var rc = new BinaryTreeNode(15);
    var rclc = new BinaryTreeNode(13);
    var rcrc = new BinaryTreeNode(17);
    var rclclc = new BinaryTreeNode(11);

    //Make the tree
    root.setLeftChild(lc);
    root.setRightChild(rc);

    //Make Right subtree of root.
    rc.setLeftChild(rclc);
    rc.setRightChild(rcrc);
    rclc.setLeftChild(rclclc);

    var newRoot = tree._rotateRightLeft(root);

    //Check root
    expect(Object.is(newRoot, rclc)).to.be.true;
    expect(Object.is(newRoot.getLeftChild(), root)).to.be.true;
    expect(Object.is(newRoot.getRightChild(), rc)).to.be.true;

    //Check Left subtree
    expect(Object.is(root.getLeftChild(), lc)).to.be.true;
    expect(Object.is(root.getRightChild(), rclclc)).to.be.true;

    //Check right subtree
    expect(Object.is(rc.getLeftChild(), null)).to.be.true;
    expect(Object.is(rc.getRightChild(), rcrc)).to.be.true;
  });

  it("Advanced Right left rotatation 2", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Left subtree
    var lc = new BinaryTreeNode(5);

    //Right subtree
    var rc = new BinaryTreeNode(15);
    var rclc = new BinaryTreeNode(13);
    var rcrc = new BinaryTreeNode(17);
    var rclcrc = new BinaryTreeNode(14);

    //Make the tree
    root.setLeftChild(lc);
    root.setRightChild(rc);

    //Make Right subtree of root.
    rc.setLeftChild(rclc);
    rc.setRightChild(rcrc);
    rclc.setRightChild(rclcrc);

    var newRoot = tree._rotateRightLeft(root);

    //Check root
    expect(Object.is(newRoot, rclc)).to.be.true;
    expect(Object.is(newRoot.getLeftChild(), root)).to.be.true;
    expect(Object.is(newRoot.getRightChild(), rc)).to.be.true;

    //Check Left subtree
    expect(Object.is(root.getLeftChild(), lc)).to.be.true;
    expect(Object.is(root.getRightChild(), null)).to.be.true;

    //Check right subtree
    expect(Object.is(rc.getLeftChild(), rclcrc)).to.be.true;
    expect(Object.is(rc.getRightChild(), rcrc)).to.be.true;

  });

  it("Simple Left right rotatation", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Left subtree
    var lc = new BinaryTreeNode(5);
    var lcrc = new BinaryTreeNode(7);

    //Make the tree
    root.setLeftChild(lc);

    //Make left subtree of root.
    lc.setRightChild(lcrc);

    var newRoot = tree._rotateLeftRight(root);

    expect(Object.is(newRoot, lcrc)).to.be.true;
    expect(Object.is(newRoot.getLeftChild(), lc)).to.be.true;
    expect(Object.is(newRoot.getRightChild(), root)).to.be.true;

  });

  it("Advanced Left right rotatation", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Left subtree
    var lc = new BinaryTreeNode(5);
    var lclc = new BinaryTreeNode(3);
    var lcrc = new BinaryTreeNode(7);
    var lcrcrc = new BinaryTreeNode(8);

    //Right subtree
    var rc = new BinaryTreeNode(15);
    //Make the tree
    root.setLeftChild(lc);
    root.setRightChild(rc);

    //Make left subtree of root.
    lc.setLeftChild(lclc);
    lc.setRightChild(lcrc);
    lcrc.setRightChild(lcrcrc);

    var newRoot = tree._rotateLeftRight(root);

    //Check if correct root has been set.
    expect(Object.is(newRoot, lcrc)).to.be.true;

    //Check left subtree
    expect(Object.is(newRoot.getLeftChild(), lc)).to.be.true;
    expect(Object.is(lc.getLeftChild(), lclc)).to.be.true;
    expect(Object.is(lc.getRightChild(), null)).to.be.true;

    //Check Right subtree
    expect(Object.is(newRoot.getRightChild(), root)).to.be.true;
    expect(Object.is(root.getLeftChild(), lcrcrc)).to.be.true;
    expect(Object.is(root.getRightChild(), rc)).to.be.true;

  });

  it("Advanced Left right rotatation 2", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Left subtree
    var lc = new BinaryTreeNode(5);
    var lclc = new BinaryTreeNode(3);
    var lcrc = new BinaryTreeNode(7);
    var lcrclc = new BinaryTreeNode(6);

    //Right subtree
    var rc = new BinaryTreeNode(15);
    //Make the tree
    root.setLeftChild(lc);
    root.setRightChild(rc);

    //Make left subtree of root.
    lc.setLeftChild(lclc);
    lc.setRightChild(lcrc);
    lcrc.setLeftChild(lcrclc);

    var newRoot = tree._rotateLeftRight(root);

    //Check if correct root has been set.
    expect(Object.is(newRoot, lcrc)).to.be.true;

    //Check left subtree
    expect(Object.is(newRoot.getLeftChild(), lc)).to.be.true;
    expect(Object.is(lc.getLeftChild(), lclc)).to.be.true;
    expect(Object.is(lc.getRightChild(), lcrclc)).to.be.true;

    //Check Right subtree
    expect(Object.is(newRoot.getRightChild(), root)).to.be.true;
    expect(Object.is(root.getLeftChild(), null)).to.be.true;
    expect(Object.is(root.getRightChild(), rc)).to.be.true;


  });

  it("Simple right left rotatation", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Right subtree
    var rc = new BinaryTreeNode(15);
    var rclc = new BinaryTreeNode(13);

    //Make the tree
    root.setRightChild(rc);

    //Make left subtree of root.
    rc.setLeftChild(rclc);

    var newRoot = tree._rotateRightLeft(root);

    expect(Object.is(newRoot, rclc)).to.be.true;
    expect(Object.is(newRoot.getRightChild(), rc)).to.be.true;
    expect(Object.is(newRoot.getLeftChild(), root)).to.be.true;

  });

  it("Advanced right left rotatation", function(){
    //Make a tree wich is umbalanced at the root.
    var root = new BinaryTreeNode(10);

    //Left subtree
    var lc = new BinaryTreeNode(5);

    //Right subtree
    var rc = new BinaryTreeNode(15);
    var rcrc = new BinaryTreeNode(17);
    var rclc = new BinaryTreeNode(13);
    var rclclc = new BinaryTreeNode(11);

    //Make the tree
    root.setLeftChild(lc);
    root.setRightChild(rc);

    //Make left subtree of root.
    rc.setLeftChild(rclc);
    rc.setRightChild(rcrc);
    rclc.setLeftChild(rclclc);

    var newRoot = tree._rotateRightLeft(root);

    //Check if correct root has been set.
    expect(Object.is(newRoot, rclc)).to.be.true;

    //Check left subtree
    expect(Object.is(newRoot.getLeftChild(), root)).to.be.true;
    expect(Object.is(root.getLeftChild(), lc)).to.be.true;
    expect(Object.is(root.getRightChild(), rclclc)).to.be.true;

    //Check Right subtree
    expect(Object.is(newRoot.getRightChild(), rc)).to.be.true;
    expect(Object.is(rc.getLeftChild(), null)).to.be.true;
    expect(Object.is(rc.getRightChild(), rcrc)).to.be.true;

  });

  it("Insertion test 1 with right right rotation only", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 5, 3];
    for(let n of array){
      tree.push(n);
    }

    //Check length
    expect(tree.size()).to.equal(3, "Wrong size of tree returned after adding 3 nodes");

    //Check height
    expect(tree.getHeight()).to.equal(1, "Wrong height returned after adding 3 nodes");

    //Checking if tree was build successfully
    expect(tree._root.getVal()).to.equal(5, "Wrong root after adding tree nodes");

    //Check left tree
    expect(tree._root.getLeftChild().getVal()).to.equal(3, "Wrong left child after adding tree nodes");
    expect(tree._root.getLeftChild().getLeftChild()).to.equal(null, "Wrong left left child after adding tree nodes");
    expect(tree._root.getLeftChild().getRightChild()).to.equal(null, "Wrong left right child after adding tree nodes");
    //check right tree
    expect(tree._root.getRightChild().getVal()).to.equal(10, "Wrong right child after adding tree nodes");
    expect(tree._root.getRightChild().getLeftChild()).to.equal(null, "Wrong right left child after adding tree nodes");
    expect(tree._root.getRightChild().getRightChild()).to.equal(null, "Wrong right left child after adding tree nodes");
  });

  it("Insertion test 2 with left left rotation only", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 15, 17];
    for(let n of array){
      tree.push(n);
    }

    //Check length
    expect(tree.size()).to.equal(3, "Wrong size of tree returned after adding 3 nodes");

    //Check height
    expect(tree.getHeight()).to.equal(1, "Wrong height returned after adding 3 nodes");

    //Checking if tree was build successfully
    expect(tree._root.getVal()).to.equal(15, "Wrong root after adding tree nodes");

    //Checking Left tree
    expect(tree._root.getLeftChild().getVal()).to.equal(10, "Wrong root after adding tree nodes");
    expect(tree._root.getLeftChild().getLeftChild()).to.equal(null, "Wrong left left child after adding tree nodes");
    expect(tree._root.getLeftChild().getRightChild()).to.equal(null, "Wrong left right child after adding tree nodes");
    //Check right tree
    expect(tree._root.getRightChild().getVal()).to.equal(17, "Wrong right child after adding tree nodes");
    expect(tree._root.getRightChild().getLeftChild()).to.equal(null, "Wrong right left child after adding tree nodes");
    expect(tree._root.getRightChild().getRightChild()).to.equal(null, "Wrong right left child after adding tree nodes");
  });

  it("Insertion test 3 with right right rotation only, but with more nodes", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 7, 15, 5, 8, 3];
    for(let n of array){
      tree.push(n);
    }

    //Check length
    expect(tree.size()).to.equal(6, "Wrong size of tree returned after adding 3 nodes");

    //Check height
    expect(tree.getHeight()).to.equal(2, "Wrong height returned after adding 3 nodes");

    //Checking if tree was build successfully
    expect(tree._root.getVal()).to.equal(7, "Wrong root after adding six nodes");

    //Check left tree
    expect(tree._root.getLeftChild().getVal()).to.equal(5, "Wrong left child after adding six nodes");
    expect(tree._root.getLeftChild().getLeftChild().getVal()).
    to.equal(3, "Wrong left left child after adding six nodes");
    expect(tree._root.getLeftChild().getRightChild()).
    to.equal(null, "Wrong left right child after adding six nodes");

    //Check right tree
    expect(tree._root.getRightChild().getVal()).to.equal(10, "Wrong right child after adding six nodes");
    expect(tree._root.getRightChild().getLeftChild().getVal()).
    to.equal(8, "Wrong right left child after adding six nodes");
    expect(tree._root.getRightChild().getRightChild().getVal()).
    to.equal(15, "Wrong right right child after adding six nodes");
  });

  it("Insertion test 4 with simple left right rotation", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 5, 7];
    for(let n of array){
      tree.push(n);
    }

    //Check length
    expect(tree.size()).to.equal(3, "Wrong size of tree returned after adding 3 nodes");

    //Check height
    expect(tree.getHeight()).to.equal(1, "Wrong height returned after adding 3 nodes");

    //Checking if tree was build successfully
    expect(tree._root.getVal()).to.equal(7, "Wrong root after adding tree nodes");

    //Checking Left tree
    expect(tree._root.getLeftChild().getVal()).to.equal(5, "Wrong root after adding tree nodes");
    expect(tree._root.getLeftChild().getLeftChild()).to.equal(null, "Wrong left left child after adding tree nodes");
    expect(tree._root.getLeftChild().getRightChild()).to.equal(null, "Wrong left right child after adding tree nodes");

    //Check right tree
    expect(tree._root.getRightChild().getVal()).to.equal(10, "Wrong right child after adding tree nodes");
    expect(tree._root.getRightChild().getLeftChild()).to.equal(null, "Wrong right left child after adding tree nodes");
    expect(tree._root.getRightChild().getRightChild()).to.equal(null, "Wrong right left child after adding tree nodes");
  });

  it("Insertion test 5 with left right rotation, but with more nodes", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 5, 15, 3, 7, 8];
    for(let n of array){
      tree.push(n);
    }

    //Check length
    expect(tree.size()).to.equal(6, "Wrong size of tree returned after adding six nodes");

    //Check height
    expect(tree.getHeight()).to.equal(2, "Wrong height returned after adding six nodes");

    //Checking if tree was build successfully
    expect(tree._root.getVal()).to.equal(7, "Wrong root after adding six nodes");

    //Check left tree
    expect(tree._root.getLeftChild().getVal()).to.equal(5, "Wrong left child after adding six nodes");
    expect(tree._root.getLeftChild().getLeftChild().getVal()).
    to.equal(3, "Wrong left left child after adding six nodes");
    expect(tree._root.getLeftChild().getRightChild()).
    to.equal(null, "Wrong left right child after adding six nodes");

    //Check right tree
    expect(tree._root.getRightChild().getVal()).to.equal(10, "Wrong right child after adding six nodes");
    expect(tree._root.getRightChild().getLeftChild().getVal()).
    to.equal(8, "Wrong right left child after adding six nodes");
    expect(tree._root.getRightChild().getRightChild().getVal()).
    to.equal(15, "Wrong right right child after adding six nodes");
  });


  it("Insertion test 6 with left right rotation, same as six, but with nodes placed a bit different to test all cases.", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 5, 15, 7, 3, 6];
    for(let n of array){
      tree.push(n);
    }

    //Check length
    expect(tree.size()).to.equal(6, "Wrong size of tree returned after adding six nodes");

    //Check height
    expect(tree.getHeight()).to.equal(2, "Wrong height returned after adding six nodes");

    //Checking if tree was build successfully
    expect(tree._root.getVal()).to.equal(7, "Wrong root after adding six nodes");

    //Check left tree
    expect(tree._root.getLeftChild().getVal()).to.equal(5, "Wrong left child after adding six nodes");
    expect(tree._root.getLeftChild().getLeftChild().getVal()).
    to.equal(3, "Wrong left left child after adding six nodes");
    expect(tree._root.getLeftChild().getRightChild().getVal()).
    to.equal(6, "Wrong left right child after adding six nodes");

    //Check right tree
    expect(tree._root.getRightChild().getVal()).to.equal(10, "Wrong right child after adding six nodes");
    expect(tree._root.getRightChild().getLeftChild()).
    to.equal(null, "Wrong right left child after adding six nodes");
    expect(tree._root.getRightChild().getRightChild().getVal()).
    to.equal(15, "Wrong right right child after adding six nodes");
  });

  it("Insertion test 7 with simple right left rotation", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 15, 12];
    for(let n of array){
      tree.push(n);
    }

    //Check length
    expect(tree.size()).to.equal(3, "Wrong size of tree returned after adding 3 nodes");

    //Check height
    expect(tree.getHeight()).to.equal(1, "Wrong height returned after adding 3 nodes");

    //Checking if tree was build successfully
    expect(tree._root.getVal()).to.equal(12, "Wrong root after adding 3 nodes");

    //Checking Left tree
    expect(tree._root.getLeftChild().getVal()).to.equal(10, "Wrong root after adding tree nodes");
    expect(tree._root.getLeftChild().getLeftChild()).to.equal(null, "Wrong left left child after adding tree nodes");
    expect(tree._root.getLeftChild().getRightChild()).to.equal(null, "Wrong left right child after adding tree nodes");
    //Check right tree
    expect(tree._root.getRightChild().getVal()).to.equal(15, "Wrong right child after adding tree nodes");
    expect(tree._root.getRightChild().getLeftChild()).to.equal(null, "Wrong right left child after adding tree nodes");
    expect(tree._root.getRightChild().getRightChild()).to.equal(null, "Wrong right left child after adding tree nodes");
  });

  it("Insertion test 8 with right left rotation, but with more nodes", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 5, 15, 13, 17, 11];
    for(let n of array){
      tree.push(n);
    }

    //Check length
    expect(tree.size()).to.equal(6, "Wrong size of tree returned after adding six nodes");

    //Check height
    expect(tree.getHeight()).to.equal(2, "Wrong height returned after adding six nodes");

    //Checking if tree was build successfully
    expect(tree._root.getVal()).to.equal(13, "Wrong root after adding six nodes");

    //Checking Left tree
    expect(tree._root.getLeftChild().getVal()).to.equal(10, "Wrong root after adding tree nodes");
    expect(tree._root.getLeftChild().getLeftChild().getVal()).to.equal(5, "Wrong left left child after adding tree nodes");
    expect(tree._root.getLeftChild().getRightChild().getVal()).to.equal(11, "Wrong left right child after adding tree nodes");
    //Check right tree
    expect(tree._root.getRightChild().getVal()).to.equal(15, "Wrong right child after adding tree nodes");
    expect(tree._root.getRightChild().getLeftChild()).to.equal(null, "Wrong right left child after adding tree nodes");
    expect(tree._root.getRightChild().getRightChild().getVal()).to.equal(17, "Wrong right left child after adding tree nodes");
  });

  it("Insertion test 9 with right left rotation, but with more nodes", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 5, 15, 13, 17, 14];
    for(let n of array){
      tree.push(n);
    }
    //Checking if tree was build successfully
    expect(tree._root.getVal()).to.equal(13, "Wrong root after adding six nodes");

    //Checking Left tree
    expect(tree._root.getLeftChild().getVal()).to.equal(10, "Wrong root after adding tree nodes");
    expect(tree._root.getLeftChild().getLeftChild().getVal()).to.equal(5, "Wrong left left child after adding tree nodes");
    expect(tree._root.getLeftChild().getRightChild()).to.equal(null, "Wrong left right child after adding tree nodes");
    //Check right tree
    expect(tree._root.getRightChild().getVal()).to.equal(15, "Wrong right child after adding tree nodes");
    expect(tree._root.getRightChild().getLeftChild().getVal()).to.equal(14, "Wrong right left child after adding tree nodes");
    expect(tree._root.getRightChild().getRightChild().getVal()).to.equal(17, "Wrong right left child after adding tree nodes");
  });

  it("Testing find method", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 5, 15, 13, 17, 14];
    for(let n of array){
      tree.push(n);
    }

    //Checking if all values added could be found.
    expect(tree.find(10)).to.equal(10, "Could not find value added to the tree after adding");
    expect(tree.find(5)).to.equal(5, "Could not find value added to the tree after adding");
    expect(tree.find(13)).to.equal(13, "Could not find value added to the tree after adding");
    expect(tree.find(14)).to.equal(14, "Could not find value added to the tree after adding");
    expect(tree.find(17)).to.equal(17, "Could not find value added to the tree after adding");
    expect(tree.find(999)).to.equal(null, "Could not find value added to the tree after adding");
  });

  it("Testing find smallest method", function(){
    var tree = new AVLTree(compareFunction);
    var array = [10, 5, 7, 3];
    for(let n of array){
      tree.push(n);
    }

    //Checking if smallest value is found
    expect(tree.findSmallest()).to.equal(3, "Smallest value not found");
    tree.push(2);
    expect(tree.findSmallest()).to.equal(2, "Smallest value not found");
    tree.push(1);
    expect(tree.findSmallest()).to.equal(1, "Smallest value not found");
    tree.push(0);
    expect(tree.findSmallest()).to.equal(0, "Smallest value not found");
    tree.push(-1);
    expect(tree.findSmallest()).to.equal(-1, "Smallest value not found");
    tree.push(11);
    expect(tree.findSmallest()).to.equal(-1, "Smallest value not found");
    tree.push(13);
    expect(tree.findSmallest()).to.equal(-1, "Smallest value not found");
  });

});
