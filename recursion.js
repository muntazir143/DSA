function power(num, pow) {
  //base case
  if (pow === 0) {
    return 1;
  }
  //recursion
  return num * power(num, pow - 1);
}

console.log(power(2, 4));

function factorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(4));
