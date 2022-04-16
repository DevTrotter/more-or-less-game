import createRandomNumber from './createRandomNumber'

describe('randomNumber Unit Test Suites', () => {
  it('should return a number', () =>
    expect(typeof createRandomNumber(50).toBe('number')))
})
