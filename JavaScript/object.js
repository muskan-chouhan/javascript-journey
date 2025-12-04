// singleton
//Object.create  //constructore method ke through

//object literals
const mysym = Symbol("key1")  // symbol declartion

const jsUser = {           //Object literal
    name : "muskan",
    "full_name": "muskan chouhan",
    age : 18,
    email : "muskan@gmail.com",
    isLoggedIn : false,
    [mysym] : "mykey1",  /// add symbol

}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mysym])

//value chnage
jsUser.email = "anya@gmail.com"
// Object.freeze(jsUser);
//jsUser.email = "new@gmail.com"  // ❌
// console.log(jsUser);


//funtion in object
jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
