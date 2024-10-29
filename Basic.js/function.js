functions
//! es5 and es6

//todo: es5 - function statements, function expressions, anonymous function 

// ? es6 - fat arrow function
// ? a) basic fat arrow
// ? b) fat arrow with one param
// ? c) fat arrow with implicit return


// ! js mai functions first class function ka darja diya gya h, jiska matlab h, ki js mai functions ko value/
// ! variable ki trh treat kiya ja sakta h 


// ? Different ways to write a function---------

function abcd(){
    //! function statement
}

var abcd = function(){
    // ! function expression
}

var anonymous = function(){
    // ! anonymous functions
}

// todo: fat arrow 
var myFunction = () => {}
// fat arrow function

var a = () => {
    //! basic fat arrow
}

var g = ab => {                 //todo: their is a single parameter so we can remove the fat over here.....
                                // todo: is it necesarry to remove...No... It's depend opon your choice...Yes...
    //! fat arrow with one param
}
// g(12)

// var myFunction = () =>  "Nikhl", [], 12 //! you can write any single value that you want it can be array, your name, number



// //!  ------------------------- IFFE ------------------------------------

// (function sum(num1,num2){
//     console.log(num1+num2)
// })(2,3); // if here we not use ; then it'll throw an error.

// (function add(num1,num2){
//     console.log(num1+num2);
// })(2,3);

// ( (name) => {
//     console.log(`${name}`);
// })('Nikhil')

// //! ------------------------- Arrow Function ----------------------------

// var sum = (num1,num2) => {
//     return num1+num2
// }
// console.log(sum(2,3));

// //! ------------------------ Named Function ------------------------------

// function sum(num1,num2){
//     return num1+num2
// }
// console.log(sum(2,3));

// //! ----------------------- Anonymous function ---------------------------

// var sum = function(num1,num2){
//     return num1+num2
// }
// console.log(sum(2,3));


//! Last in first out ------------------- LIFO --------------------Callstack



