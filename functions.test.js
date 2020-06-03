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
  const load2 = 500;
  expect(load1 + load2).toBeLessThan(1600);
});
// toBeLessThanOrEqual
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});
// Regex not
test("There is no numbers in word", () => {
  expect("Hello").not.toMatch(/^[0-9]*$/);
});
// Regex toMatch
test("There are only numbers in the input", () => {
  expect("7868521478").toMatch(/^[0-9]*$/);
});
// Arrays toContain
test("Admin should be in usernames", () => {
  usernames = ["erick", "vero", "admin"];
  expect(usernames).toContain("admin");
});
