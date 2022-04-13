const getOpenDoors = require("./getOpenDoors");

test("100 doors", () => {
  const result = getOpenDoors(100);
  const expectedResult = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
  expect(result).toStrictEqual(expectedResult);
});

test("10 doors", () => {
  const result = getOpenDoors(10);
  const expectedResult = [1, 4, 9];
  expect(result).toStrictEqual(expectedResult);
});

test("20 doors", () => {
  const result = getOpenDoors(20);
  const expectedResult = [1, 4, 9, 16];
  expect(result).toStrictEqual(expectedResult);
});

test("30 doors", () => {
  const result = getOpenDoors(30);
  const expectedResult = [1, 4, 9, 16, 25];
  expect(result).toStrictEqual(expectedResult);
});

test("40 doors", () => {
  const result = getOpenDoors(40);
  const expectedResult = [1, 4, 9, 16, 25, 36];
  expect(result).toStrictEqual(expectedResult);
});
