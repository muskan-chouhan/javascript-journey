// 1️⃣ products array banao jisme 5 objects ho (name & price). → forEach() se sab ka naam aur price print karo.

const products = [
  { name: "bag", price: 300 },
  { name: "watch", price: 3000 },
  { name: "belt", price: 400 },
  { name: "shoes", price: 33000 },
  { name: "cap", price: 250 }
];

products.forEach((item) => {
  console.log(`Product: ${item.name}, Price: ₹${item.price}`);
});

 
// q2 students array)
const students = [
  { name: "Nikita", marks: 92 },
  { name: "Muskan", marks: 85 },
  { name: "Aman", marks: 78 },
  { name: "Riya", marks: 88 },
  { name: "Arjun", marks: 95 }
];

students.forEach((student) => {
  if (student.marks >= 80) {
    console.log(`${student.name} passed with ${student.marks} marks 🏆`);
  }
});

//easy n hi h tum hi btao 3rd bhi 