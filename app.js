//Q1
//{1,2,3,4}

//Q2
//I have no idea 
//Idk what "ref" means

//Q3
//{[1,2,3]: true, [1,2,3], false}

function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length
}

function vowelCount(str) {
  str = str.toLowerCase();
  const vowels = "aeiou";
  const vowelCount = new Map();
  for (let letter of str) {
    if (vowels.indexOf(letter) !== -1) {
      if (vowelCount.has(letter)) {
        vowelCount.set(letter, vowelCount.get(letter) + 1);
      } else {
        vowelCount.set(letter, 1);
      }
    }
  }
  return vowelCount;
}
