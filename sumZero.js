const addToZero = (arr) => {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    if (arr[start] < 0) {
      for (let i = 0 + 1; i < end; i++) {
        if (arr[start] + arr[i] === 0) {
          return true;
        }
      }
    }
    start += 1;
  }
  return false;
};

// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// // -> True

//runtime 0(n)
