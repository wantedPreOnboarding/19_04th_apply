import generateNextId from './generateNextId';
import { messages } from 'data/chat';

test('id를 포함한 객체를 요소로 가지는 배열을 입력하면 마지막 인덱스에 + 1 값을 반환합니다.', () => {
  expect(generateNextId(messages)).toBe(1005);
});

test('빈 배열을 입력하게 되면 0을 반환합니다.', () => {
  expect(generateNextId([])).toBe(0);
});
