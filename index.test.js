const addNumbs = require("./index");

test("should check if function addNumbs returns correct sum of numbers", () => {
  expect(addNumbs(1, 5)).toBe(6);
});
