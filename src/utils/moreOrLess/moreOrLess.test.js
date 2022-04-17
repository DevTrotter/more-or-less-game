import moreOrLess from './moreOrLess'

describe('unit test for moreOrLess function', () => {
  it('should be return more if number as >', () => {
    expect(moreOrLess(12, 23)).toEqual("c'est plus")
  })

  it('should be return less if number as <', () => {
    expect(moreOrLess(30, 23)).toEqual("c'est moins")
  })

  it('should be return win if number as =', () => {
    expect(moreOrLess(23, 23)).toEqual('win')
  })
})
