export function camelCase(str: string): string {
  const strArr = str.split(' ')

  strArr.forEach((word, index) => {
    index === 0
      ? (strArr[index] = word.toLowerCase())
      : (strArr[index] = word.charAt(0).toUpperCase() + word.slice(1))
  })

  return strArr.join('')
}

export function decamelize(str: string): string {
  const strArr = str.split('')
  const normalizedStr = strArr.reduce((acc: string[], cur: string, index: number) => {
    if (cur === cur.toUpperCase()) {
      acc.push(' ')
    }

    index === 0 ? acc.push(cur.toUpperCase()) : acc.push(cur)

    return acc
  }, [])

  return normalizedStr.join('')
}
