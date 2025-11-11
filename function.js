function saymyname (){
    console.log('h');
    console.log('i');
    console.log('t');
    console.log('e');
    console.log('s');
    console.log('h');
}
saymyname()


// function addnum (num1,num2){
//       console.log(num1 + num2);
      
// }
// addnum(3,8)





function addnum (num1,num2){
//    let result = num1 + num2;
//    return result;
      
return num1 + num2;

}  

const result = addnum(3,8);  //function store in variable
console.log(result);




//
function loginusermsg(username ="same"){
    if(!username){
    console.log("plz enter username");
    return;
    
    }
    return `${username} just logged in`
}

console.log(loginusermsg("hitesh"));
console.log(loginusermsg("hitesh"));

/////////////////////////



function calculatecartprisse(val1,val2,...num1) {   //rest operatore paases multiple value

    return num1;
}

console.log(calculatecartprisse(200,300,400,500));


// funtion in object
const user = {
  name: "muskan",
  prise: 999,
}

function handelObject(anyobject){
    console.log(`username is ${anyobject.name} and prise is ${anyobject.prise} `);
    
}

// handelObject(user);
handelObject({
    name: "anya",
    prise : 800,
});  //object banye bina object dirclty pass kr skte hai



//function in array

const myNewArray = [1, 2, 3, 4, 5,6]
function returnsecondprise(getArry){
 return getArry[1]
}                         
// console.log(returnsecondprise(myNewArray));
console.log(returnsecondprise([2,4,6,8]));  //direclt paas array