
// stirng declartion type 1
const name = "anya" //type1 = (string literal)
const repoCount = 30;
console.log(name + repoCount + "value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); 

// stirng declartion type 2

const gameName = new String('anyachh__hhh'); //type2 = (String object)
console.log(gameName[0]);
console.log(gameName.__proto__);

// methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));


const newString =  gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-3,2);
console.log(anotherString);


const newStringOne = "  hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','_'));

console.log(url.includes('hitesh'));

console.log(gameName.split('_'));