const functions = require("./functions");
// Case1: We want to initialize our data base before each funtion and close it after each.

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// const initDatabase = () => console.log("Database initialized...");
// const closeDatabase = () => console.log("Database closed...");

// Case2: We want to initialize our data base before all of the test and once all of the test completed we run closeDatabase
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database initialized Once...");
// const closeDatabase = () => console.log("Database closed Once...");

// Case3: Target certain tests
const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Vero", () => {
    const user = "Vero";
    expect(user).toBe("Vero");
  });
});

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
// Async data use Promise
test("User fetch name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
// Async data use Async await
test("User fetch name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
