const userEmail = "muskan";
if(userEmail){
    console.log("Got user email");
    
} else{
    console.log("dont have user email");
    
}

// fasly values
// false, 0 , -0, Bigint 0n, "" , null , defined , nan,

// truthy values 
// "0" , "false" , " ",{} ,[], function(){}


// how to heck ARAY EMPTY OR NOT 

if(userEmail.length === 0) {
    console.log("array is empty");
    
}

const emptyObj = {}


if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}


//nullsih coalesing oprator (??) : null ,umdefind

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = null ?? 10 ?? 20
console.log(val1);


//ternary oprator

//condtion ? true : false
const iceTeaPraise = 100
iceTeaPraise  <= 80 ? console.log("less then 80") : console.log("more then 80");


