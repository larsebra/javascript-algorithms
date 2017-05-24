import {expect} from "chai";
import Stack from "../lib/Data Structures/Linear Structures/Stack.js";
import Queue from "../lib/Data Structures/Linear Structures/Queue.js";

describe('Stack', () => {
  it('Check push and pop', () => {
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
  it('Check enque and dequeue', () => {
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
