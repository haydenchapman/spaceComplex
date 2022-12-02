function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowercase = string.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return "False";
    }
  }

  return "True";
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

//