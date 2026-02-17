import { cx } from "../presets/cx.js";

describe("cx", () => {
  test("1) combines two strings", () => {
    expect(cx("a", "b")).toBe("a b");
  });

  test("2) combines one function and one string", () => {
    const fn = () => "a";
    expect(cx(fn, "b")).toBe("a b");
    expect(cx("b", fn)).toBe("b a");
  });

  test("3) combines two functions", () => {
    const fnA = () => "a";
    const fnB = () => "b";
    expect(cx(fnA, fnB)).toBe("a b");
  });

  test("4) combines two functions and one string", () => {
    const fnA = () => "a";
    const fnB = () => "b";
    expect(cx(fnA, "mid", fnB)).toBe("a mid b");
  });

  test("ignores falsy inputs (e.g. condition && fn)", () => {
    const fnA = () => "a";
    const fnB = () => "b";
    expect(cx(fnA, false && fnB, "", null, undefined)).toBe("a");
  });

  test("ignores falsy returned from functions", () => {
    const fnA = () => "a";
    const fnEmpty = () => "";
    expect(cx(fnA, fnEmpty, "b")).toBe("a b");
  });
});
