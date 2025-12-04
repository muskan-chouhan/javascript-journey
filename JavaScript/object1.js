// with the help of constructor

// const tinderuser = new Object()  //singleton object
const tinderuser = {} //non singletonobject

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isloggedIn = false

console.log(tinderuser);


//nested object

const regularUser = {
    email: "muksan@gmail.com" ,
    fullname:  {
        userfullname:{
            firstname: "muskan",
            lastname: "chouhan"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//combine array
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

//spread

const  obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);



//jb bhi database se value aati hai
const user =[
    {
    id : 1,
    email : "test@gmail.com",
    },
        {
    id : 2,
    email : "test@gmail.com",
    },
        {
    id : 3,
    email : "test@gmail.com",
    },
]

user[1].email;

console.log(tinderuser);
console.log(Object.keys(tinderuser));   //key acesss imp  //key ka type array rhta hai then us pr loop lga skte hai 
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


//check property
console.log(tinderuser.hasOwnProperty('isloggedIn'));

