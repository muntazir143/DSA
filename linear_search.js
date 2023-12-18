const num = [2, 4, 67, 8, 44, 6, 12];

function linearSearch(array, target) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(num, 8));
