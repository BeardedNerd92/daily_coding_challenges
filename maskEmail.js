const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function maskEmail(email) {
  if (!email.includes('@') || 
      email.indexOf('@') === 0 || 
      email.lastIndexOf('@') === email.length - 1 ||
      email.lastIndexOf('@') !== email.indexOf('@')) {
      return "Error: Invalid Email"
    
  }
  
  let beginEmail = email.slice(1, email.indexOf('@') - 2);
  let endEmail = email.slice(email.indexOf('@') - 1);
  let editedEmail = "";
  let maskedEmail;


  for (let i = 0; i <= beginEmail.length; i++) {
     maskedEmail = (email[0]) + (editedEmail += '*') + (endEmail);
     
  }
 
  return maskedEmail;
}

readline.question('Enter an email address: ', email => {
  console.log(`${maskEmail(email)} `);
  readline.close();
}
);

// Space Complexity: O(n) - linear time complexity due to the loop iterating through part of the email string
// Time Complexity: O(n) - linear time complexity due to the loop iterating through part of the email string
