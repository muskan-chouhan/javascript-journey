//Q1
const name = "muskan";
console.log(name.length);

//Q2
const newString = "hello world";
console.log(newString.slice(6,11));          //slice(start, end)

//Q3

const newName = " anya "
console.log(newName.trim());

//Q4
const language = "javascript";
console.log(language.charAt(0));  // "j"
console.log(language.charAt(language.length - 1));  // "t"

//Q5
const languagenew = "i love JS";
console.log(languagenew.toUpperCase());

//Q6
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','_'));

//Q7
const gameName = "hitesh";
console.log(gameName.split(""));  // [ 'h','i','t','e','s','h' ]

//Q8
/*
const password = "mySecret123";
console.log(password.replace('mySecret','***'));
*/

//dynamic real word

const password = "mySecret123";
const visible = password.slice(-3);   // "123"
const hidden = "*".repeat(password.length - 3);  // "*******"
console.log(hidden + visible);  // "*******123"


//Q9
const check  = "hello world";
console.log(check.includes('world'));

//Q10
const split = "muskan-chouhan-js";
console.log(split.split("-"));


//Q11
const str = "JavaScript";
console.log(str.charCodeAt(3)); 

//Q real world 

const userName = " muskan_123 "
const correctName = userName.trim();
const finalName = correctName.replace('_','-');
console.log(finalName);


//q

const name1 = " Muskan JS  " 
const correctName1 = name1.trim();
const finalName1 = correctName1.toUpperCase(); 
const newName1 = finalName1.replace(' ', '-');  // sirf first space replace karega
console.log(newName1);   // MUSKAN-JS

/* regex mostly used in real world (for multiple spaces)

const newName = finalName.replace(/\s+/g, '-');  // sabhi spaces replace
console.log(newName);   // MUSKAN-JS

*/




