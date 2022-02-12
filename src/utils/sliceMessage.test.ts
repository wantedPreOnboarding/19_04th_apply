import sliceMessage from './sliceMessage';

test('글자 자르기 테스트 : 10자 제한, 10자 이상', () => {
  expect(sliceMessage('가나다라마바사아자차카타파하우흐흐', 10));
});

test('글자 자르기 테스트 : 10자 제한, 10자 이하', () => {
  expect(sliceMessage('가나다라', 10));
});

test('글자 자르기 테스트 : 5자 제한, 5자 이상', () => {
  expect(sliceMessage('가나다라마바사아자차카타파하', 5));
});

test('글자 자르기 테스트 : 5자 제한, 5자 이하', () => {
  expect(sliceMessage('가나다', 10));
});
