import isEmpty from './isEmpty';

test('공백을체크합니다.', () => {
  expect(isEmpty('       ')).toBe(false);
});

test('공백을체크합니다.', () => {
  expect(isEmpty('')).toBe(true);
});
