import { formattedDate } from './date';

describe('formattedDate test', () => {
  test('Unix 타임을 입력하면 yyyy-mm-dd hh:MM:ss 포맷으로 출력합니다 ', () => {
    expect(formattedDate(1644634568989)).toBe('2022-02-12 11:56:08');
  });
  test('formattedDate(1644620008989); => 2022-02.12 07:53:28', () => {
    expect(formattedDate(1644620008989)).toBe('2022-02-12 07:53:28');
  });
});
