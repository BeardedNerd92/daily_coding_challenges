const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function toBinary(decimal) {
  let result = "";
  while(decimal > 0) {
    var remainder = decimal % 2;
    result = remainder += result;
    decimal = Math.floor(decimal / 2);
  }
  return result || 0;
}

readline.question('Enter a decimal number: ', decimal => {
  console.log(`The binary representation is: ${toBinary(decimal)}`);
  readline.close();
}
);

// Space Complexity: O(n) - linear time complexity due to the loop iterating through the number of bits in the binary representation
// Time Complexity: O(n) - linear time complexity due to the loop iterating through the number of bits in the binary representation

