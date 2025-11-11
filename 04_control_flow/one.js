
// > ,<, <=, >=, ==,  === , !=  ,!==

//  if 
const isUserLoggedIn = true;
const temprature = 40;
if(temprature <50 ){
    console.log("less than 50");
    
} else{
    console.log("greater than 50");
    
}

// 2nd example
const score = 200;
if(score > 100){
    let power = "fly";
    console.log(`user score ${power}`);
    
}
// console.log(`user score ${power}`);     execute nhi hoga buz scope nhi hai


//short hand statement
const balance = 100;
if(balance > 500)  console.log("test");    //impicit scope (maan liya hai ke scope hai )



//nesting (2,3 condition check krni h)

const newBalnce = 100;
if(newBalnce >500){
    console.log("less then 500");
    
} else if(newBalnce > 750){
    console.log("less than 750");
    
} else{
    console.log("less then 1200");
    
}


// real life example

const UserLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoggle = false;

if(UserLoggedIn && debitCard ){    // dono condition true ho jb chlega
    console.log(" allow to by course ");
    
}


if( loggedInFromEmail || loggedInFromGoggle){ // dono mai se ek bhi true hui to chlega
    console.log("user logged in");
    
}