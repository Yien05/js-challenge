const removeVowelsAndCapitalize = function (arr) {
  let vowels = ["a", "e", "i", "o", "u"];

  return arr.map((str) =>
    [...str]
      .filter((c) => !vowels.includes(c))
      .join("")
      .toUpperCase()
  );
};

console.log(removeVowelsAndCapitalize(["hello", "world"])); // returns ['HLL', 'WRLD']
