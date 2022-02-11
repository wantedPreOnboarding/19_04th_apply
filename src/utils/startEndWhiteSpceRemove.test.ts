import startEndWhiteSpceRemove from './startEndWhiteSpceRemove';

test('앞뒤공백을 제거합니다.', () => {
  expect(startEndWhiteSpceRemove('      Believe in yourself   ')).toBe('Believe in yourself');
});

test('앞뒤공백을 제거합니다.', () => {
  expect(startEndWhiteSpceRemove('  Seize the day   ')).toBe('Seize the day');
});
