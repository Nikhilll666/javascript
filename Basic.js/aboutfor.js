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
