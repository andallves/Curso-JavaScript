const candles = [8, 9, 2, 8, 9, 9]
function birthdayCakeCandles(candles) {
  let tallest = 0;
  let count = 0;

  for (let candle of candles) {
    tallest = candle > tallest ? candle : tallest;
  }
  for (let candle of candles) {
    count += candle === tallest ? 1 : 0;
  }
  console.log(tallest, count)
  return count;
}

console.log(birthdayCakeCandles(candles));