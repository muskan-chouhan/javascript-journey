const marvel_heros =  ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)  //concat return new array
console.log(allHeros);

// Spread operator ... → easy syntax for merging arrays.

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const anotherArry = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anotherArry = anotherArry.flat(Infinity)
console.log(real_anotherArry);


//mostly used
console.log(Array.isArray("hitesh")) //check
console.log(Array.from("hitesh")) //convert into array
console.log(Array.from({name: "hitesh"}))  //interesting


let score1 = 100;
let score2 = 100;
let score3 = 100;

console.log(Array.of(score1, score2, score3));
