//numbers
const score = 100;            // normal number
console.log(score);

const balance = new Number(200); // special Number object
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNum = 123.8869;
console.log(otherNum.toPrecision(3));


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

//---------------------Maths------------------------//


console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.6));   //mostly used , nearest integer (5)
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(4,8,4,2));



console.log(Math.random()); //mostly used
Math.floor(Math.random() * 10); // 0 to 9
Math.floor(Math.random() * 10) + 1; // 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// short trick for min and  max value
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);