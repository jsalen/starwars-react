export const formatPopulation = (population: string) => {
  if (population === 'unknown') return population

  const num = Number(population)

  if (num > 999 && num < 1000000) {
    return num / 1000 + 'K'
  } else if (num >= 1000000) {
    return num / 1000000 + 'M'
  } else if (num <= 999) {
    return num.toString()
  }
}

export const formatNumber = (num: string) => {
  const newNum = Number(num)

  return new Intl.NumberFormat('en-US').format(newNum)
}
