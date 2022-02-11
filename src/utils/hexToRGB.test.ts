import hexToRGB from './hexToRGB';

test('hex 컬러 타입을 입력하면 rgb로 반환합니다', () => {
  expect(hexToRGB('#123456')).toBe('rgb(18, 52, 86)');
});

test('alpha 값을 옵션으로 입력할 수 있습니다', () => {
  expect(hexToRGB('#123456', 0.8)).toBe('rgba(18, 52, 86, 0.8)');
});
