import { sum } from '../index'

describe('index', () => {
  describe('sum', () => {
    it('无参数时返回 0', () => {
      expect(sum()).toEqual(0)
    })

    it('一个数时返回它本身', () => {
      expect(sum(1)).toEqual(1)
      expect(sum(2)).toEqual(2)
    })

    it('多个数时返回它们的和', () => {
      expect(sum(1, 2, 3)).toEqual(6)
    })
  })
})
