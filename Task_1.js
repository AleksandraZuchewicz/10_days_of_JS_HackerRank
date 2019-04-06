/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function isVowel(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(letter)) {
    return true;
  } else {
    return false;
  }
}
function vowelsAndConsonants(s) {
  let vowelsAndCinsonantsArray = s.split("");
  let vowels = [];
  let consonants = [];
  for (let i = 0; i < vowelsAndCinsonantsArray.length; i++) {
    let letter = vowelsAndCinsonantsArray[i];
    if (isVowel(letter)) {
      vowels.push(letter);
    } else {
      consonants.push(letter);
    }
  }
  let mergedArrays = vowels.concat(consonants);
  for (let i = 0; i < mergedArrays.length; i++) {
    console.log(mergedArrays[i]);
  }
}

/*Answer
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s*/
