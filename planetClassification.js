const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



function classification(temp) {
  let result;
  switch(temp) {
     default: 
      if (!temp & temp != 0) {
        result = "No input";
        return result;
      }
   
    case 1:
      if (temp >= 30000) {
        result = "O";
        return result;
      }
      case 2:
        if (temp >= 10000 & temp <= 29999) {
          result = "B";
          return result;
        }
      case 3:
        if (temp >= 7500 & temp <= 9999) {
          result = "A";
          return result;
        }
      case 4:
        if (temp >= 6000 & temp <= 7499) {
          result = "F";
          return result;
        }
      case 5:
        if (temp >= 5200 & temp <= 5999) {
          result = "G";
          return result;
        }
      case 6:
        if (temp >= 3700 & temp <= 5199) {
          result = "K";
          return result;
        }
      case 7:
        if (temp >= 0 & temp <= 3699) {
          result = "M";
          return result;
        }
       
  }

}

readline.question('Enter a star temperature: ', temp => {
  console.log(`The star classification is: ${classification(temp)}`);
  readline.close();
}
);


// Space Complexity: O(1) - constant time complexity as the function uses a fixed amount of space regardless of input size
// // Time Complexity: O(1) - constant time complexity as the function executes in a fixed number of steps regardless of input size



