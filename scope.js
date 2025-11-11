// block scope
// global scope

let a = 60;
const b = 30;
// var c = 40;


if(true){
    let a = 10;
    const b = 30;
  console.log("inner", a);
  
}


console.log("outer",a);
// console.log(b);
// console.log(c);


///////🔹 2. Nested Scope (Lexical Scope) //////////////


function parent(){
    const name = "muskan";
    
    function child() {
         const website = "youtube"
         console.log(name);    // ✅ parent ka variable access kar skta hai
    }
    //  console.log(website);
     

     child();
}

parent();


// 🔹 3. Nested if scope

if(true){
    const username = "hitesh";

    if(username === "hitesh"){
        const website = "youtube";
        console.log(username + website);
    }
    // console.log(website);   ❌ error (outside scope)
    
    
}
// console.log(username);


//🔹 4. Hoisting (important!) ++++++++++++ interesting +++++++++++++++++++++++++
addone(4); //execute hoga
function addone(num){
   return num+1; 
}


//hosting
addtwo(20); //error dega
const addtwo = function(num){           //function expression
    return num+2;
}



