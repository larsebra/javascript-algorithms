import {expect} from "chai";
import Stack from "../src/Data Structures/Linear Structures/Stack.js";

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
