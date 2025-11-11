const myArray = [0, 1, 2, 3, 4, 5]

const  heros = ["shaktiman", "nagraj"]

const anotherArry = new Array(1, 2, 3, 4);
console.log(anotherArry[1]);

// array methods

myArray.push(6)
myArray.push(7)
myArray.pop()
console.log(myArray);

myArray.unshift(9);   //optimize nhi hai
console.log(myArray);


myArray.shift();
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));

const newArry = myArray.join();  //mostly used (join but convert into string)
console.log(myArray);
console.log(newArry);



//slice ,splice


console.log("A" , myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B" , myArray);


const myn2 = myArray.splice(1, 3)
console.log("C" , myArray);
console.log(myn2);