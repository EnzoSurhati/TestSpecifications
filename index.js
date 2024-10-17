function multiplication(a, b) {
  return a * b;
}

function concatOdds(arr1, arr2) {
  const combined = arr1.concat(arr2);
  const odds = combined.filter(num => num % 2 !== 0);
  return odds.sort((a, b) => a - b);
}

module.exports = { multiplication, concatOdds };