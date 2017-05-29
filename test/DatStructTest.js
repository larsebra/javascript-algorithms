import {expect} from "chai";
import Stack from "../lib/Data Structures/Linear Structures/Stack.js";
import Queue from "../lib/Data Structures/Linear Structures/Queue.js";
import BinHeap from "../lib/Data Structures/Graphs/BinHeap.js";
//import BinMaxHeap from "../lib/Data Structures/Graphs/BinMaxHeap.js";
import Node from "../lib/Common/Node.js";

describe('Stack', () => {
  it('Should push and pop correctly', () => {
    var stack = new Stack();
    stack.push("hello1");
    stack.push("hello2");
    stack.push("hello3");
    expect(stack.size() === 3).to.equal(true);
    expect(stack.pop() === "hello3").to.equal(true);
    expect(stack.size() === 2).to.equal(true);
    expect(stack.peek() === "hello2").to.equal(true);
    expect(stack.pop() === "hello2").to.equal(true);
    expect(stack.size() === 1).to.equal(true);
    expect(stack.pop() === "hello1").to.equal(true);
    expect(stack.isEmpty() === true ).to.equal(true);
    expect(stack.push("hello1") === 1 ).to.equal(true);
  });
});

describe('Queue', () => {
  it('Should enque and dequeue correctly', () => {
    var q = new Queue();
    expect(q.enqueue("1")).to.equal(1);
    expect(q.enqueue("2")).to.equal(2);
    expect(q.enqueue("3")).to.equal(3);
    expect(q.dequeue()).to.equal("1");
    expect(q.dequeue()).to.equal("2");
    expect(q.enqueue("1")).to.equal(2);
    expect(q.dequeue()).to.equal("3");
    expect(q.peek()).to.equal("1")
    expect(q.dequeue()).to.equal("1");
    //expect(q.dequeue()).to.throw("EmptyQueueError: Cannot dequeue, queue is empty");
  });
});

describe('MinHeap', () => {
  it('Should add and remove correct. Min value should always be at root', () => {
    var mh = new BinHeap((a,b)=>{
      return (a.getVal() < b.getVal()) ? true: false;
    });

    mh.add(new Node(10));
    expect(mh.peek().getVal()).to.equal(10);
    //console.log(mh);
    mh.add(new Node(11));
    mh.add(new Node(112));
    mh.add(new Node(1));
    expect(mh.peek().getVal()).to.equal(1);
    mh.add(new Node(3));
    mh.add(new Node(0));
    expect(mh.peek().getVal()).to.equal(0);
    mh.add(new Node(-1));
    expect(mh.peek().getVal()).to.equal(-1);
    expect(mh.remove().getVal()).to.equal(-1);
    expect(mh.remove().getVal()).to.equal(0);
    expect(mh.remove().getVal()).to.equal(1);
    expect(mh.remove().getVal()).to.equal(3);
    expect(mh.remove().getVal()).to.equal(10);
    expect(mh.remove().getVal()).to.equal(11);
    expect(mh.remove().getVal()).to.equal(112);
    expect(mh.remove()).to.equal(undefined);
  });
});

describe('MaxBinHeap', () => {
  it('Should add and remove correct. Min value should always be at root', () => {
    var mh = new BinHeap((a,b)=>{
      return (a.getVal() > b.getVal())?true:false;
    });
    mh.add(new Node(10));
    expect(mh.peek().getVal()).to.equal(10);
    //console.log(mh);
    mh.add(new Node(11));
    mh.add(new Node(112));
    mh.add(new Node(110));
    expect(mh.peek().getVal()).to.equal(112);
    mh.add(new Node(300));
    mh.add(new Node(0));
    expect(mh.peek().getVal()).to.equal(300);
    mh.add(new Node(-1000));
    expect(mh.remove().getVal()).to.equal(300);
    expect(mh.remove().getVal()).to.equal(112);
    expect(mh.remove().getVal()).to.equal(110);
    expect(mh.remove().getVal()).to.equal(11);
    expect(mh.remove().getVal()).to.equal(10);
    expect(mh.remove().getVal()).to.equal(0);
    expect(mh.remove().getVal()).to.equal(-1000);
    expect(mh.remove()).to.equal(undefined);
  });
});
