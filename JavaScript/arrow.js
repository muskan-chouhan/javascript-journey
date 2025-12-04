//this

const user = {
    username: "hitesh",
    price: 999,

    wlcMsg: function(){
        console.log(`${this.username} , wlc to website`);
        console.log(this);
        
        
    }
}
user.wlcMsg();
user.username="same"
user.wlcMsg()
console.log(this);


function chai (){
    let username = "muskan";
    console.log(this);
    console.log(this.username);  // function ke ander work nhi krta this only work krega obbject k sath
}

chai()


// arrow function with this

const chaii = () => {
    let username = "muskan";
    console.log(this.username);  //yha b nhi hota h
}
chaii()



//only arrow function topic

//basic arrow funtcion
const basicArrowFunc= (num1,num2) => {
    return num1 + num2;
}
console.log(basicArrowFunc(2,4));




//implicit return arrow function
const add= (num1,num2) => num1 + num2;
console.log(add(2,4));


//type 3 use paranthesis ke sath return key word use nhi hota hai , only curly brackets k sat use hota hai,
// const sum= (num1,num2) => ( num1 + num2 );
const sum= (num1,num2) => ({username: "hitesh"} );  //parathesis use buz object paas krna easy hota hai
console.log(sum(2,4));


// // funtion in aarray jsut basic overview
// const myArry = [1, 2, 3, 4, 5, 6]
// myArry.forEach(function()  {})'   
// myArry.forEach(() => {})
// myArry.forEach(() => ())         //use in reacct 