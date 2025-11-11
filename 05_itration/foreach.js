
const coding = ["js","ruby","python","java","cpp"]
/*
coding.forEach(function (item) {        //callback function
   console.log(item);
   
})
*/



/*
// arrow function
coding.forEach( (item) => {   //basic arrow function
     console.log(items;
   
})
*/



/*
//sirf refencde diya hai foreach loop mai
function printMe(item){
   console.log(item);
   
}

coding.forEach(printMe)
*/

/*
//multiple parameter bhi de skte hai
coding.forEach( (item, index, arr) => {   
     console.log(item, index, arr)
   
})
*/

//array ke ander multiple object mai bhi for each use hota hai

const MyCoding = [
   {
      languageName : "javascript",
      extension : "js"
   },
      {
      languageName : "java",
      extension : "java"
   },
      {
      languageName : "python",
      extension : "py"
   },
]

MyCoding.forEach( (item) => {
   console.log(item.languageName);
   
})



/////////////////undefined return foreach//////////////////////

/*
const coding1 = ["js","ruby","python","java","cpp"]

const value = coding1.forEach( (item) => {     
   return //  foreach loop return kuch b nhi krta hai 
   
})
 console.log(value);

 */

 ///////////////filter reurn value////////

 const MyNums= [1,2,3,4,5,6,7,8,9,10];
 result= MyNums.filter((num) => num>4)  // isne return kiya hai 
 console.log(result);
 

 //// same example with dirremt syntax

const MyNums1= [1,2,3,4,5,6,7,8,9,10];
 result= MyNums1.filter((num) => {
      return num >4;      // retun keyword likhna pdega buz '{}' use kre h mtlb scope hai  
 })  // isne return kiya hai 
 console.log(result);


 // same exam for each //

 const NewNum = [];
 MyNums1.forEach( (num) => {
   if(num > 4){
     NewNum.push(num)
   }
 })
console.log(NewNum);


