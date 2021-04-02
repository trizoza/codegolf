const { test, expect } = require("@jest/globals");
const file = require("./wordGame");
const { wordGame } = require("./wordGame");

describe("wordGame ", () => {
  test("exists", () => {
    expect(wordGame).toBeInstanceOf(Function);
  });

  test("accepts two parameters", () => {
    const spy = jest.fn().mockImplementation(wordGame);
    spy("first", "second");
    expect(spy).toHaveBeenCalledWith("first", "second");
  });

  test("submittedWord must be single word", () => {
    expect(wordGame("GO MAN", "GOOD MAN YOURSELF")).toBeFalsy();
  });

  test("submittedWord can't re-use letters", () => {
    expect(wordGame("MANGA", "GOOD MAN YOURSELF")).toBeFalsy();
  });

  test("wordGame approves string match", () => {
    expect(wordGame("MOOD", "GOOD MAN YOURSELF")).toBeTruthy();
    expect(wordGame("DOOMSAYER", "GOOD MAN YOURSELF")).toBeTruthy();
    expect(wordGame("OMDAYNSEF", "GOOD MAN YOURSELF")).toBeTruthy();
    expect(wordGame("GOOD", "GOOD MAN YOURSELF")).toBeTruthy();
    expect(wordGame("GO MAN", "GOOD MAN YOURSELF")).toBeFalsy();
    expect(wordGame("MANGA", "GOOD MAN YOURSELF")).toBeFalsy();
  });
});
