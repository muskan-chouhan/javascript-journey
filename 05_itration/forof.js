//for of
// ["" , "" , ""]  aaray ke ander string
// [{} , {} , {}] array ke ander object


//array pr loop
const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
    
}

const greeting = "hellow world";
for (const greet of greeting) {
    console.log(`each char of ${greet}`);
    
}


//MAP = order yaad rkhta hai data ka nd duplicat value nhi hoti

const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('IN', "india")   //print nhi hoga
console.log(map);



for (const [key,value] of map) {
    console.log(key, ':-' ,value);
    
}


///========== object pr loop=================
const myobj = {
    'game1':"NFS",
    'game2':"Spiderman",
  
}

// for (const [key,value] of myobj) {
//     console.log(key, ':-' ,value);
    
// }  not work
