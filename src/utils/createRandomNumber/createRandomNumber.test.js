import createRandomNumber from './createRandomNumber'

test('unit test for createRandomNumber', () => {
  expect(typeof createRandomNumber(50)).toEqual('number')
})
