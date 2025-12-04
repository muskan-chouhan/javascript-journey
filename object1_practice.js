const students = [
    {
        id: 1,
        name: "muskan",
        age: 18,
        marks:{
            maths:80,
            science:70,
            english:60
        },
    },
    {
        id: 2,
        name: "anyaa",
        age: 19,
        marks:{
            maths:90,
            science:50,
            english:80
        },
    },
    {
        id: 3,
        name: "nikita",
        age: 18,
        marks:{
            maths:40,
            science:50,
            english:40
        },
    },
        {
        id: 4,
        name: "vishal",
        age: 18,
        marks:{
            maths:30,
            science:80,
            english:40
        },
    },
]

console.log(students[1].name);

console.log(students[2].marks.maths);
console.log(Object.keys(students[0])); 
console.log(students[0].hasOwnProperty("age")); // true

