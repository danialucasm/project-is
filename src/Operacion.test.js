import { division } from './Operacion';

test('division', () => {
  expect(division(68.5, 1.70)).toBe((23.70).toFixed(2));
  expect(division(71.4025, 1.69)).toBe((25.00).toFixed(2));
  expect(division(0, 1.70)).toBe((0.00).toFixed(2));
});