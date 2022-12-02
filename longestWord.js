function findLongestWord(array) {
  let longestWord = "";

  array.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord.length;
}

console.log(findLongestWord(["hi", "hello"]));
// -> 5
