import startEndWhiteSpaceRemove from './startEndWhiteSpaceRemove';

test('앞뒤공백을 제거합니다.', () => {
  expect(startEndWhiteSpaceRemove('      Believe in yourself   ')).toBe('Believe in yourself');
});

test('앞뒤공백을 제거합니다.', () => {
  expect(startEndWhiteSpaceRemove('  Seize the day   ')).toBe('Seize the day');
});
