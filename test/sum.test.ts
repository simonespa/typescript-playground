import sum from 'src/sum';
import params from './sum.params';

test.each(params)('sum($a, $b) to return $result', ({a, b, result}) => {
  expect(sum(a, b)).toBe(result);
});
