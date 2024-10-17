const { multiplication, concatOdds } = require('./index');

test("multiplication of two numbers", () => {
    expect(multiplication(2, 3)).toBe(6);
});
test("with a zero", () => {
    expect(multiplication(6, 0)).toBe(0);
});
test("combine and sort odd numbers from two arrays", () => {
    expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([-1, 1, 3, 9, 15]);
});
test("when both arrays are empty, it returns an empty resulting array", () => {
    expect(concatOdds([], [])).toEqual([]);
});