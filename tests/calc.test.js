const sum = require("../app.js");

test("Add the inputs together", () => {
  expect(sum(1, 2, 1)).toBe(4);
});
