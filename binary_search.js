const num = [1, 2, 4, 5, 7, 13, 15, 16, 18, 24, 28, 29, 67];

function binarySearch(array, target) {
  let start = 0;
  let end = num.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return "Not Found";
}

console.log(binarySearch(num, 18));
