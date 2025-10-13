//🧩 Practice Task 1 — Temperature Checker
const temprature = 20;
if(temprature <30){
    console.log("It's Cold outside ❄️");
    
}else if(temprature >=30 && temprature <= 50){
    console.log("Weather is Pleasant 🌤️");
    
}
else if(temprature>50){
    console.log("It's Too Hot 🔥");
    
}


//🛒 Practice Task 2 — Shopping Discount
const totalAmount = 600;
if(totalAmount> 1000){
    console.log("You got a 20% discount!");
}else if(totalAmount >500){
    console.log("You got a 10% discount!");
}else{
    console.log("No discount today 😅");
    
}


//🔐 Practice Task 3 — Login System
const isUserLoggedIn = true;
const hasVerifiedEmail = false;

if(isUserLoggedIn && hasVerifiedEmail){
    console.log("Access Granted ✅");
    
}else if(isUserLoggedIn || hasVerifiedEmail){
    console.log("Please complete verification 🔄");
    
}else {
    console.log("Access Denied 🚫");
    
}

//🛒 Task: Online Shopping Discount & Membership Check (nested if logic here)

// Variables
const membership = "Gold"; 
const cartTotal = 600;
const hasCoupon = true;


if(membership === "Gold" && cartTotal >500){
    console.log("20% discount");
    
} else if(membership === "silver" && cartTotal >500){
     console.log("10% discount");
} else if(cartTotal > 1000 && hasCoupon){
    console.log("extra 5% discount");
    
}else if(membership === "None" && cartTotal < 500){
    console.log("no discount");
    
} else{
    console.log("normal prise");
    
}

//Real projects me hum aise likhte:
let discount = 0;

if (membership === "Gold" && cartTotal > 500) discount = 20;
else if (membership === "Silver" && cartTotal > 500) discount = 10;
else if (cartTotal > 1000 && hasCoupon) discount = 5;

console.log(`You got ${discount}% discount!`);




//🛒 Practice Task 2 — E-commerce Order Status
const orderStatus = "delivered";
switch(orderStatus){
    case "pending":
    console.log("Your order is being processed");
    break;

    case "shipped":
    console.log("Your order is on the way");
    break;
    
    case "delivered":
    console.log("Your order has been delivered");
    break;

    case "cancelled":
    console.log("Your order was cancelled");
    break;
    
    default:
    console.log("Invalid order status");
    break;
}


//
const mood = "happy";
switch (mood) {
    case "happy":
        console.log("😊 Keep smiling!");
        break;
    case "angry":
        console.log("😡 Take a deep breath.");
        break;
    case "sleepy":
        console.log("😴 Go get some rest!");
        break;
    case "bored":
        console.log("😐 Try doing something new!");
        break;
    default:
        console.log("🤔 Mood not recognized!");
}


//truthy file practice question

//🧩 Task 1 — Check if user input is valid
const userInput = "";  // try changing to "hello", 0, false, null etc.

if(userInput){
    console.log("✅ User entered something");
} else{
    console.log("⚠️ Input is empty or invalid");
}


//🧩 Task 2 — Check empty array or object
const fruits = []; 
const userProfile = {};

if(fruits.length === 0){
    console.log("🍎 No fruits in the basket");
}

if(Object.keys(userProfile).length === 0){
    console.log("👤 No user profile data found");
}


//🧩 Task 3 — Nullish Coalescing Operator (??)
let discountt ="33";
let finalDiscount = discountt ?? 10; // agar discount null/undefined hua to 10 milega
console.log(`Discount applied: ${finalDiscount}%`);


//🧩 Task 4 — Ternary Operator
const price = 120;
const message = price > 100 ? "💰 Pricey item" : "🛒 Affordable item";
console.log(message);
