// Task 1: this inside object
const car = {
    brand: "Tesla",
    model: "X",
    start: function() {
        console.log(`${this.brand} ${this.model} is starting...`);
        console.log(this);
    }
}
car.brand = "BMW";
car.start();


//Task 2: this inside normal function
function showUser() {
    let username = "Muskan";
    console.log(this.username); 
}
showUser();  //undefined



//Task 3: this inside arrow function
const student = () => {
    let name = "Riya";
    console.log(this.name);   //undefined
}
student();

//Task 4: Basic Arrow Function
const sum = (a, b) => a + b;
console.log(sum(3, 5));


const divide = (a, b) => a / b;
console.log(divide(3, 5));

const substract = (a, b) => a - b;
console.log(substract(3, 5));


//Task 5: Implicit Return (shortcut)
const square = (num) => `square ${num*num}`;
console.log(square(77))

//Task 6: Arrow function returning object

const getUser = () => ({course: "JavaScript", duration: "2 months"});
console.log(getUser());


