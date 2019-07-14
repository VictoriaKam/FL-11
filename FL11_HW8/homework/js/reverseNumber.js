function reverseNumber(m) {
    let result = 0;
    while (m) {
      result = result * 10 + m % 10;
      m = Math.floor(m / 10);
    }
    return result;
  }
reverseNumber(-1234567);