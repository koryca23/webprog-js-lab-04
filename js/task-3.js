function generatePassword(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
  }
  
  return password;
}

function checkPassword(password, confirmPassword) {
  if (password === confirmPassword) {
      return "Passwords match";
  } else {
      return "Passwords do not match";
  }
}

function generateAndCheckPassword(length = 8) {
  const generatedPassword = generatePassword(length);
  
  const showPassword = confirm("Would you like to see the generated password?");
  
  if (showPassword) {
      alert("Generated password: " + generatedPassword);
  }

  const userPassword = prompt("Please enter your password for verification:");

  const result = checkPassword(generatedPassword, userPassword);
  
  alert(result);
}

generateAndCheckPassword(8);
