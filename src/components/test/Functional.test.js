import Functional from '../dashboard/Functional';

describe('RandomItem', () => {
  test('should get random item from array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const item = Functional(array);
    expect(array.includes(item)).toBe(true);
  });

  test('should return -1 if array is empty', () => {
    const array = [];
    const item = Functional(array);
    expect(item).toBe(-1);
  });
});
