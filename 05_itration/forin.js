const myobj = {
    js: "javascript",
    cpp: "c++",
    rb: "rubby"
}
for (const key in myobj) {

    console.log(`${key} shortcut is for ${myobj[key]}`);
    
}


//arrry pr for in loop
const programming = ["js","cpp","rb"]  // for in aaray ki key deta hai , or for of directvalue deta hai
for (const key in programming) {

    console.log(programming[key])

}

//map pr foor in loop
/*
const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('IN', "india")   //print nhi hoga
console.log(map);

for (const key in map) {
    console.log(key); // ye bhi  itratble nhi hai, nhi chlega
    
}
    */
