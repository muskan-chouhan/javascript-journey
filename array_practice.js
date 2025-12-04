// Q1: Ek array banao [10,20,30] aur usme 40 add karo (push se). Fir print karo.

const arry = [10, 20, 30];
arry.push(40)
console.log(arry);


// Q2: Array [5,6,7,8] se last element hatao (pop se)

const myArray = [5,6,7,8]
myArray.pop();
console.log(myArray);


// Q3: Ek array [1,2,3] ke starting me 0 add karo (unshift se).

const unshiftArry = [1,2,3]
unshiftArry.unshift(0);
console.log(unshiftArry);


// Q4: Ek array [9,8,7] ka first element hatao (shift se).

const shiftArry = [9,8,7]
shiftArry.shift();
console.log(shiftArry);


// Q5: Check karo ki [2,4,6,8] me 4 present hai ya nahi (includes).

const checkArry = [2,4,6,8]
checkArry.includes(4)
console.log(checkArry.includes(4));  // true



// Q6: Array [1,2,3,4] me number 3 ka index find karo.

const arrynew = [1,2,3,4]
arrynew.indexOf(3);
console.log(arrynew);
console.log(arrynew.indexOf(3));  // 2


// Q7: Array [100,200,300] ko ek string me convert karo (join se).

 const arrynew1 = [100,200,300]
 const stringArry = arrynew1.join();
 console.log(stringArry);
 console.log(arrynew1);
 

 // Q8: Ek array [11,22,33,44,55] me slice karke sirf [22,33] nikalo aur original array bhi print karo.

const arryA = [11,22,33,44,55]
const finalArry = arryA.slice(1,3); 
console.log(finalArry);  // [22,33]
console.log(arryA); 
 
 // Q9: Upar wale array par splice use karke [22,33] nikal lo aur original array bhi print karo.

const finalArry1 = arryA.splice(1,2);
console.log(finalArry1);   // [22,33]
console.log(arryA);        // [11,44,55]


//--------------------------real world task------------------

const users = ["Anya", "Muskan", "Rahul"];
users.push("priya");
console.log(users.includes("Muskan")); 
console.log(users);



// Task 2: Shopping Cart Simulation
const cart = ["Shoes", "Bag", "Watch"];
cart.push("Phone")
cart.shift();
console.log(cart.includes("Bag"));
console.log(cart.indexOf("Watch"));

const stringCart = cart.join();
console.log(stringCart);


// 🛒 Task 3: Smart Cart System
const smartCart = ["Shoes", "Bag", "Watch"];

// Step 1: Check if "Bag" is present
console.log(smartCart.includes("Bag"));  // true

// Step 2: Remove "Watch" only
const index = smartCart.indexOf("Watch");
if (index !== -1) {
  smartCart.splice(index, 1);  
}

// Step 3: Print updated length
console.log(smartCart.length);  

// Step 4: Convert array into a string
const finalCart = smartCart.join(", ");
console.log(finalCart);


// note :- method real array ko change karte hain (splice, push, pop)
//  aur kaunse sirf copy dete hain (slice, join).