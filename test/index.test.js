const index = require("../index");
var assert = require("chai").assert;
var expect = require("chai").expect;
var should = require("chai").should();

describe("testing capitalizeText function", () => {
  var num;

  beforeEach(() => {
    num = 0;
    console.log(++num);
  });

  it("takes a string  it will return a string", () => {
    setTimeout(() => {
      assert.typeOf(index.capitalizeText("Hello World"), "string");
    }, 5000);
  });

  it.skip("takes a string and return it after capitalize it", () => {
    assert.equal(index.capitalizeText("hello"), "HELLO");
  });
  it("test throw exception", () => {
    expect(() => {
      index.capitalizeText(35);
    }).to.throw(TypeError, "parameter should be string");
  });
  it.skip("the input iti will not equal to hello", () => {
    assert.notEqual(index.capitalizeText("iti"), "hello");
  });
});

describe("testing createArray function", () => {
  it("return value of type array", () => {
    assert.isArray(index.createArray(2, "shty", 20));
  });
  it("if we pass 3 it will return array of length 3 and test it's include 1", () => {
    expect(index.createArray(3, 9, 1)).to.have.lengthOf(3).that.include(1);
  });
});
