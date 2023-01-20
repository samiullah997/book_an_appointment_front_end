import Random from '../dashboard/Random';

describe('RandomItem', () => {
  test('should get random item from array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const item = Random(array);
    expect(array.includes(item)).toBe(true);
  });

  test('should return -1 if array is empty', () => {
    const array = [];
    const item = Random(array);
    expect(item).toBe(-1);
  });
});
