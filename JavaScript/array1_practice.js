//question 1
const electronics = ["Laptop", "Phone"]
const clothes = ["Shirt", "Jeans"]

const new_products = electronics.concat(clothes)
console.log(new_products);

const all_new_products = [...electronics, ...clothes];
console.log(all_new_products);

//question 2
const nested = ["Shoes", ["Belt", "Cap"], ["Watch", ["Ring"]]];
const real_array = nested.flat(Infinity)
console.log(real_array);

//question 3

console.log(Array.isArray("Phone"));  //false

//question 4

console.log(Array.from("SALE")); 

//question 5

let score1 = 200;
let score2 = 300;
let score3 = 400;

console.log(Array.of(score1, score2, score3));

//q6
/*
const wishlist = ["Shoes", "Watch", "Perfume"];
const cart = ["Bag", "Shoes", "Laptop"];

const finalProducts = [...wishlist, ...cart]
finalProducts.shift()
console.log(finalProducts.includes("Laptop"))

const newlist = finalProducts.join();

console.log(newlist);

*/


const wishlist = ["Shoes", "Watch", "Perfume"];
const cart = ["Bag", "Shoes", "Laptop"];

// (a) Merge both
const finalProducts = [...wishlist, ...cart];

// (b) Remove duplicates using Set
const uniqueProducts = [...new Set(finalProducts)];

// (c) Check if "Laptop" is present
console.log(uniqueProducts.includes("Laptop"));  // true

// (d) Convert to string
const productString = uniqueProducts.join(", ");
console.log(productString);


