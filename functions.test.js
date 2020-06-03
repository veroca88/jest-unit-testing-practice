const functions = require("./functions");
// toBe
test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
// not
test("Add 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});
// toBeFalsy
test("Should be falsy", () => {
  expect(functions.isFalsy()).toBeFalsy();
});
// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
// toEqual
test("User should be Vero Donoso object", () => {
  expect(functions.creatUser()).toEqual({
    firstName: "Vero",
    lastName: "Donoso",
  });
});
// toBeLessThan
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});
