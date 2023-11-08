//Split the input sentence into an array of words
//assume longestwordlength is 0.
//Iterate through the words

function findLongestWord(str) {
  // Split the input sentence into an array of words
  var words = str.split(" ");
  var longestWordLength = 0;

  // Iterate through the words and find the length of the longest word
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }

  return longestWordLength;
}

// Example usage:
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWord("May the force be with you")); // 5
