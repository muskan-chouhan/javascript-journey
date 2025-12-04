//q1
const user = {
  name: "Anya",
  age: 20,
  email: "anya@example.com"
  
}
console.log(user.email);
console.log(user ['email']);

//q2
user.isLoggedIn = true;
console.log(user);

//q3
const product = {
name: "Shoes",
price: 1200,
inStock: true,
}

//q3
product.price = 1500;
console.log(product);


//q5
const car = {
  start: function() {
    console.log("Car Started");
  }
}
car.start(); // method call


//q

const student = {
    name: "muskan",
    age: 18,
    greet:function(){
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

student.greet();


//q
const calculator = {

    add: function(a,b){
       let c= a + b;
       let d = a*b;
       console.log(c);
     
     return;
    },
    multiply: function(a,b){
        let d = a*b;
        console.log(d);

    }

}
calculator.add(2,4);
calculator.multiply(4,8);


//q
const user1 = {
    name : "muskan",
    login: function(){
        console.log(`User ${this.name} has logged in.`);
        
    }
}

user1.login();

// ✅ Task 1 – Nested object

const userNew = {
  id: 1,
  name: "Muskan",
  address: {
    city: "Indore",
    pincode: 452001
  }
};

userNew.address.city = "Dewas"

console.log(userNew.address.city);
console.log(userNew.address.pincode);


//Task 2 — Object.freeze() and copy to modify
const config = { theme: "dark", version: 1 };
Object.freeze(config);

config.theme = "light";   // ❌ freeze hone ke baad change NHI hoga
config.newProp = true;    // ❌ ye bhi add NHI hoga

console.log(config); // { theme: "dark", version: 1 }

const configNew = { ...config, theme: "blue", version: 2 };
console.log(configNew); // { theme: "blue", version: 2 }



//Task 3 — this behavior & method extraction
const person = {
  name: "Anya",
  greet() { console.log("Hi, I'm " + this.name); }
};
person.greet();   // call as method
const say = person.greet;
say();    // kya output hua? (reason dekho)

const sayBound = person.greet.bind(person);
sayBound(); // should print correctly



//Task 4 — iterate object (keys/values/entries & for...in)
const productnew = { id: 1, name: "Shoes", price: 1200 };
console.log(Object.keys(productnew))
console.log(Object.values(productnew));
console.log(Object.entries(productnew));  //
