//  primtive datatypes (call by value)

//7 types :number,boolean,null,symbol,undefined,string,bigint

// const score = 22;
// const soreValue = 18.90;

// const isLoggedIn = false
// const outSideTemp = null
// let userEmail;

// const id = Symbol('123')

// const bigNumber = 2778892992n;

// // #nonprimitive/ reference

// // array, objects, funtions

// const heros = ["shaktiman,nagraj,doga"];
// let myObj = {
//     name : "anyaa",
//     age : 22,
// } 

// const myFunction = function(){
//      console.log("hello anya");
     
// }

//console.log(typeof score);



// ----------------Practuce question--------------------------------

//q1

const students = ["anya", "muskan", "rahul"];
const newStudents = students;

newStudents.push("Priya");   // push() function call
console.log(students);       // Output check karo
console.log(newStudents);


//q2
let user = { name: "Muskan", city: "Indore" }

let newUser = user;
newUser.city = "Delhi";
console.log(user.city);


