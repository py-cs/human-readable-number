module.exports = function toReadable (number) {
  d = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
  }
  const threeDigits = (n) => {
    let res = ''
    if (n > 99) {
        res += d[Math.floor(n / 100)] + ' hundred '
        n = n % 100
      }
    if (n) res += d[n] || threeDigits(Math.floor(n/10)*10) + ' ' + threeDigits(Math.floor(n%10))
    return res
  }
  return number ? threeDigits(number).trim() : 'zero'
}
