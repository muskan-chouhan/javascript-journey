// dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 2, 4)  //tym
console.log(myCreatedDate1.toLocaleString());


let myCreatedDate2 = new Date("01-14-2024")
console.log(myCreatedDate2.toLocaleString());  //dd-mm-yy


let myTimeStamp = Date.now()
console.log(myTimeStamp);  //value in ms
console.log(myCreatedDate2.getTime());
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default', {
    weekday: "long",
   
})