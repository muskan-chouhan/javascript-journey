/*
const MyNums = [1,2,3]
const MyTotal = MyNums.reduce( function (acc, currenvalue){
    console.log(`acc ${acc}, curren ${currenvalue}`);
    
    return acc + currenvalue
},0 )
*/
// with aarow function
const MyNums = [1,2,3]
const MyTotal = MyNums.reduce( (acc,curr) => acc + curr,0 )
console.log(MyTotal);


//
const ShoppingCart = [
    {course: "java", price: 15999},
    {course: "python", price: 15999},
    {course: "data science", price: 15999},
    {course: "mobile dev course", price: 15999},
]
const PriceToPay = ShoppingCart.reduce( (acc,items) => acc+items.price,0)
console.log(PriceToPay);

