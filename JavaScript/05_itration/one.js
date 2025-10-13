//for
for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        //console.log("5 is best number");
        
    }
   // console.log(element);
    
}


for (let i = 0; i <=10; i++) {
//   console.log(`outer loop value ${i}`);
  
    for (let j = 0; j <=10; j++) {
        //  console.log(`inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
        
    }
}

//basic array loop
const myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

//brak and continue

for (let index = 1; index < 10; index++) {
    if(index === 5){
        console.log(`detected 5`);
        continue // break    
    }
 console.log(`value of i is ${index}`);
 ;
    
}