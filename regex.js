//regx practice questions

//Email validation
const email = "test@example.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test(email));  // true


// Only numbers allowed (mobile number jaisa)
const mobile = "9876543210";
const numRegex = /^[0-9]{10}$/; 
console.log(numRegex.test(mobile));  // true


// Remove extra spaces
const messy = "  Hello     World   ";
const clean = messy.replace(/\s+/g, " ").trim();
console.log(clean);  // "Hello World"


// Check if string contains only alphabets
const name = "Muskan";
const alphaRegex = /^[A-Za-z]+$/;
console.log(alphaRegex.test(name));  // true


