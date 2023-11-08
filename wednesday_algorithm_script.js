//split the string into array
//for loop iterate through the words
function titleCase(inputValue) {
  const b = inputValue.split(" ");
  var output = "";
  var firstLetter = 0;
  for (i = 0; i < b.length; i++) {
    for (j = 0; j < b[i].length; j++) {
      if (j == 0) {
        output += b[i][firstLetter].toUpperCase();
      } else {
        output += b[i][j].toLowerCase();
      }
    }
    output += " ";
  }
  console.log(output);
}
