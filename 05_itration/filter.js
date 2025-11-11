const books = [
  { title: "Book 1", genre: "Fiction", publishYear: 2012, editionYear: 2015 },
  { title: "Book 2", genre: "Non-Fiction", publishYear: 2014, editionYear: 2016 },
  { title: "Book 3", genre: "History", publishYear: 2010, editionYear: 2013 },
  { title: "Book 4", genre: "Science Fiction", publishYear: 2018, editionYear: 2020 },
  { title: "Book 5", genre: "History", publishYear: 2011, editionYear: 2014 },
  { title: "Book 6", genre: "Fantasy", publishYear: 2019, editionYear: 2021 },
  { title: "Book 7", genre: "Mystery", publishYear: 2013, editionYear: 2017 },
  { title: "Book 8", genre: "Adventure", publishYear: 2016, editionYear: 2019 },
  { title: "Book 9", genre: "Self-Help", publishYear: 2015, editionYear: 2018 }
];


let UserBooks = books.filter( (bk)  => bk.genre === "History")

UserBooks = books.filter ( (bk) => { 
    return bk.publishYear >= 2011 && bk.genre === "History"
})

console.log(UserBooks);


//////////////practice question////////

//q1// 1️⃣ Even numbers filter karo 2️⃣ Odd numbers filter karo 3️⃣ Numbers > 5 filter karo

const nums = [1, 4, 7, 2, 9, 10];

const evenNumbers = nums.filter(num => num % 2 === 0);

console.log(evenNumbers);

//odd
const oddNumbers = nums.filter(num => num % 2 !== 0);
console.log(oddNumbers);


// 1️⃣ Names starting with 'N' filter karo
const names = ["Nikita", "Neha", "Rahul", "Ravi", "Nisha"];

const result = names.filter(nam => nam.startsWith("N"));
console.log(result);


// 2️⃣ Names having length > 4 filter karo
const longNames = names.filter(nam => nam.length > 4);
console.log(longNames);


// 1️⃣ Price < 1000 wale products dikhana
const products = [
  { name: "Watch", price: 500 },
  { name: "Shoes", price: 1200 },
  { name: "Bag", price: 800 },
  { name: "Laptop", price: 40000 },
];

const belowThousand = products.filter((item) => item.price < 1000);
console.log("Price < 1000:", belowThousand);

// 2️⃣ Price between 500 and 2000 wale
const betweenRange = products.filter((item) => item.price >= 500 && item.price <= 2000);
console.log("Price between 500 and 2000:", betweenRange);



