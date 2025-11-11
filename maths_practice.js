/*
console.log(Math.round(7.4));   // ?
console.log(Math.floor(7.9));   // ?
console.log(Math.ceil(7.1));    // ?
console.log(Math.abs(-12));     // ?
console.log(Math.max(3, 7, 2)); // ?
console.log(Math.min(3, 7, 2)); // ?

*/


//q Ek random number print karo 0–9 ke beech.
let randomNum1 = Math.floor(Math.random()*10);
console.log(randomNum1);

//q Ek random number print karo 1–10 ke beech.
let randomNum2 = Math.floor(Math.random() * 10 + 1)
console.log(randomNum2);

//q Ek random number print karo 1–100 ke beech.

let randomNum3 = Math.floor(Math.random() * 100) + 1;
console.log(randomNum3); // 1–100


//q Ek random number print karo 50–60 ke beech.

const min = 50
const max = 60

console.log(Math.floor(Math.random() * (max - min + 1)) + min);