//q

function calcDiscount(price, discountPercent) {
   let discountAmount = price * (discountPercent / 100);
   let finalPrice = price - discountAmount;
   return finalPrice;
}

console.log(calcDiscount(1000, 10)); // 900
console.log(calcDiscount(500, 20));  // 400


//q
function toFahrenheit(celsius) {
   let F = (celsius * 9/5) + 32;
   return F;
}

console.log(toFahrenheit(0));   // 32
console.log(toFahrenheit(25));  // 77


//q

function addition(...nums) {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  return sum;
}

const final = addition(2, 3, 4, 5);
console.log(final);  // Output: 14




//
const book = {
    author : "J.K. Rowling",
    title : "Harry Potter"
}

function printBookDetails(anyobject) {
       console.log(`book titlle is ${anyobject.title} and author is ${anyobject.author} `);
}

printBookDetails(book);


//
function getLastItem(anyarray) {
  return anyarray[anyarray.length - 1];
}

console.log(getLastItem([2, 3, 4, 5, 6])); // Output: 6
