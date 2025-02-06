//!
//*
//todo:
//?


//! ---------------------------- For of ----------------------------------

// const arr = [1,2,3,4,5]

// for (const element of arr) {
//     console.log(element);
// }

// const greetings = "Hello World" // ----------------- Use of for of in String -------------
// for (const greet of greetings){
    // console.log(greet);
// }

// const map = new Map()

// map.set('In', 'India')
// map.set('Fr', 'France')
// map.set('Uk', 'United kingdom')

// for( const [key,value] of map){         //*----------------- give [ key, value] -----------------
    // console.log(key,":- ",value);
// }

//! --------------------------For in Object ------------------------------

// const myObejct = {
//     'name': "Nikhil",
//     age: 19,
//     grade: "A",
// }

// for (const key in myObejct){
//     console.log(key,"is for",myObejct[key]);
// }

// --------------------------For in Array ------------------------------

// const arr = [9,8,7,6]

// for( const key in arr){
//     console.log(arr[key])      //*  isn't same work as for in object 
// }

//! ----------------------For Each in Aarray ------------------------------

const coding = ["js","python","cpp","java","ruby"]

// coding.forEach( function (element){         // 1st way
//         console.log(element)
// } )

// coding.forEach((element)=>{                 // 2nd way
//     console.log(element);
// })
                                               
// function printMe(item){                        // 3rd way
//     console.log(item);
// }
// coding.forEach(printMe)

// !----------------- forEach use obeject in Array ------------------------

// ?forEach ek normal loop nhi h for and while ki tarah jo numbres pe ya start end per chalta h,
//? forEach loop sirf array pe chalta h 
 
// const myArray = [
//     {
//         laguagename: "javasricpt",
//         laguagefilename: "js",
//     },
//     {
//         laguagename: "pyhtom",
//         laguagefilename: "py",
//     },
//     {
//         laguagename: "java",
//         laguagefilename: "java",
//     }
// ]

// myArray.forEach( (item) => {
//     console.log(item.laguagename,item.laguagefilename);
// } )



// let i = 0
// for(; i <5; i++){
//     console.log(i);
// }
// console.log(i);

// var student = {
//   name: "Nikhil",
//   email: "nikhil23@navgurukul.org",
//   age: 18,
//   greet: function(name){
//     console.log(`Hello ${this.name}!`)
//   },
//   address: {
//     country: "India",
//     city: "Kanpur",
//     pin_code: 208016,
//   },
// };
// var friend = {
//   name: "Mishra",
//   email: "mishra23@navgurukul.org",
//   age: 20,
//   greet: function(name){
//     console.log(`Hello ${this.name}!`)
//   },
//   address: {
//     country: "America",
//     city: "arjentina",
//     pin_code: 506080,
//   },
// }

// var topper = {
//   name: "Divyanshu",
//   email: "divyanshu23@navgurukul.org",
//   age: 21,
//   greet: function(name){
//     console.log(`Hello ${this.name}!`)
//   },
//   address: {
//     country: "India",
//     city: "Delhi",
//     pin_code: 203030,
//   }};

//   class Student {
//     constructor(name, email, age, country, city, pin_code){
//       this.name = name;
//       this.email = email;
//       this.age = age;
//       this.address = {
//       country: country,
//       city: city,
//       pin_code: pin_code,
//     };
//     }
//     greet(name){
//     console.log(`Hello ${this.name}!`)
//     }
//     getFullAddress(country, city, pin_code){
//       return `${this.address.country},${this.address.city}-${this.address.pin_code}`
//     }
//   }
  

// console.log(student.name);
// student.age = 10;
// console.log(student.age);
// student.greet();
// console.log(student.address.country);
// student.address["pin_code"] = 206014;
// console.log(student.address);
// friend.greet();
// console.log(friend)
// console.log(topper);
// let me = new Student("Nikhil", "nikhil23@navgurukul.org", 18, "India", "Kanpur", 208016);
// let myFriend = new Student("Shivi", "shivi23@navgurukul.org", 19, "India", "Haridwar", 203040);
// let anotherStudent = new Student("Sanskriti", "sanskriti23@navgurukul.org", 20, "India", "Himachal", 302060);
// console.log(me);
// console.log(myFriend);
// console.log(anotherStudent);

// me.greet();
// myFriend.greet();
// anotherStudent.greet();
// console.log(me.getFullAddress())
// console.log(myFriend.getFullAddress());
// console.log(anotherStudent.getFullAddress());

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(num => console.log(num));
// if(0.1 + 0.2 === 0.3){
//     console.log("True");
// }else{
//     console.log("False");
// }

// var numbers = [1, 2, 3, 4, 5];
// var number = function(num){
//   return console.log(num);
// };

// numbers.forEach(number);

// var twice = function(num){
//   return console.log(num*2);
// };

// numbers.forEach(twice);
