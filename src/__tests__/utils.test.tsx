import { formatNumber, formatPopulation } from '../utils'

describe('utils', () => {
  test('formatNumber separates number by three digits group', () => {
    expect(formatNumber('1234567')).toBe('1,234,567')
    expect(formatNumber('10e12')).toBe('10,000,000,000,000')
    expect(formatNumber('unknown')).toBe('NaN')
    expect(formatNumber('-1')).toBe('-1')
  })

  test('formatPopulation formats number by adding M or K at the end', () => {
    expect(formatPopulation('200000')).toBe('200K')
    expect(formatPopulation('6000000')).toBe('6M')
    expect(formatPopulation('1000000')).toBe('1M')
    expect(formatPopulation('999')).toBe('999')
  })
})
