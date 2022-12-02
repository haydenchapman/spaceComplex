function uniqueChar(str) {
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (str.indexOf(letter) !== str.lastIndexOf(letter)) {
      return false;
    }
  }
  return true;
}

console.log(uniqueChar("MobileSuit"));

//runtime 0(n)
