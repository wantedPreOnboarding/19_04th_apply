import isStringEmpty from './isStringEmpty';

test('공백을체크합니다.', () => {
  expect(isStringEmpty('       ')).toBe(false);
});

test('공백을체크합니다.', () => {
  expect(isStringEmpty('')).toBe(true);
});
