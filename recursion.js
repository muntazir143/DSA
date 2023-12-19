function power(num, pow) {
  //base case
  if (pow === 0) {
    return 1;
  }
  //recursion
  return num * power(num, pow - 1);
}

console.log(power(2, 4));
