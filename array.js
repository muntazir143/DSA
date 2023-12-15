// function reverse() {
//   const name = 'Hi my name is John';
//   for (let i = name.length -1; i >= 0; i--) {
//     console.log(name[i]);
//   }
// }

// reverse();

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arr3 = [...arr1, ...arr2]
  for(let i = 0; i <= arr3.length, i++;){
    if(arr3[i] < arr3[i++]){
      mergedArray.push(arr3[i]);
      i++;
    } else {
      
    }
  }
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);