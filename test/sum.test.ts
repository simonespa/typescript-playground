import sum from 'src/sum';

test('basic', () => {
  const a = 3;
  const b = 2;
  expect(sum(a, b)).toBe(a + b);
});
