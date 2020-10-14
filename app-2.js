const getMaxLengtOfZeros = (number, _length = -1, _max = 0) => {
  if (number === 0) {
    return _max
  }
  let rest = number % 2
  let nextNumber = (number - rest) / 2
  if (rest === 0) {
    return getLength(nextNumber, _length + 1, _max)
  } else {
    return getLength(nextNumber, 0, Math.max(_max, _length + 1))
  }
}

