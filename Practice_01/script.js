// //! console.log
// console.log("Hello")

// //! console.warn
// console.warn("Hello");


// //! console.error
// console.error("Hello");

// alert("Nikhil")

// todo: var nic =  prompt("Hello Nikhil...")
// console.log(nic);


// var obj = {};
// var obj = new Object();

console.log(this);

function abcd(){
    console.log(this)
}
// abcd()

var obj = {
    name: function(){
        console.log(this)
    },
    // age: 18,
    // email: "nikhl23@navgurukul.org"
}
// obj.name();

var obj2 = {
    sayname: function(){
        function childfunc(){
            console.log(this);
        }

        childfunc()
    },
    age: 25,
}
// obj2.sayname()


var obj3 = {
    sayname: function() {
        const child = () => {
            console.log(this)
        }
        child()
    }
}
// obj3.sayname()


var obj3 = {
    sayname: ()=>{
        console.log(this);
    }
}
// obj3.sayname()

function add(){
    console.log(this);
}
// const ans = new add();


// obj = { name: "Nikhil"}

// function abcd(a,b,c){
//     console.log(this)
// }
// abcd.call(obj,1,2,3);

// abcd.apply(obj,[1,2,3])

// const baadMaiChalaneKeLiyeFunc = abcd.bind(obj)

// baadMaiChalaneKeLiyeFunc()

// function abcd(){
//     var a = 12;
//     return function(){
//         a++;
//         console.log(a);
//     }
// }

// var ans = abcd();
// ans()

//! Event delegation = jab aap event listener se kai saare different elements ke events ko
//! handle kar sake 

//? Event listener ko parent per lagao and usko id, class ya fir tag ke basis par differensiate
//? karke different task karao

// var parent = document.querySelector("#parent");

// parent.addEventListener("click",function(details){
//     console.log(details);
//     if(details.target.id == "play"){
//         console.log("Play video");
//     }
//     else if(details.target.id == "pause"){
//         console.log("Pause video");
//     }
// })

//todo: error handling like pro - try catch

// function divide(a,b){
//     try{
//         if(b == 0){
//             throw Error("Error Dedected");
//         }
//         console.log(a/b)
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// divide(12,0)


//! make event

// events, click, bdclick, mouseover, input
// if i wanna make gharjao event the things i have to do....

//todo: how 

//? make event 
//? attch event to some dom element
//? dispatch that event from that dom element in which you attached event

// const yourEvent = new Event("gharjao");

// document.querySelector("button")
// .addEventListener("gharjao", function(){
//     alert("Jaa rha hu");
// })

// document.querySelector("button").dispatchEvent(yourEvent)


// ! Classes in JavaScript
// ? The way to convert object into class------- let myobj = new myClass();


class ToyotaCar {
    constructor(brand){
        console.log("Creating new object...");
        this.brand = brand;
    }

    start(){
        console.log("Start");
        
    }

    stop(){
        console.log("stop");
        
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

// let fortuner = new ToyotaCar("fortuner");
// fortuner.setBrand("Fortuner");          //check fortuner

// let lexus = new ToyotaCar();


//! Inheritence in Javascript 

// class Parent {
//     hello() {
//         console.log("hello");
        
//     }
// }

// class Child extends Parent{}

// let object = new Child();


//? 2nd example--------

class Person {
    constructor() {
        console.log("Enter parent constructor");
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat");
        
    }

    sleep() {
        console.log("sleep");
        
    }
}

class Engineer extends Person {
    constructor (branch) {
        console.log("Enter child constructor");
        
        super();                    // to invoke parent class constructor
        this.branch = branch;

        console.log("Exit child constructor");
    }

    work() {
        console.log("solve problems, build something");
        
    }
}

// let NikhilObj = new Engineer();


//! Async javascript code-------------

// console.log("Code_1");
// console.log("Code_2");

// setTimeout(() => {
//     console.log("Hello, This is Nikhil!");
    
// }, 5000);

// console.log("Code_3");
// console.log("Code_4");

// ! Callback Hell 

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             // if(getNextData) {
//             //     getNextData();
//             // }
//             resolve("Sucess");
//         }, 2000)
//     });
// }


//todo: By Await -------

// async function  getAllData() {
//     console.log("Getting Data 1...");
//     await getData(1);

//     console.log("Getting Data 2...");
//     await getData(2);

//     console.log("Getting Data 3...");
//     await getData(3);

//     console.log("Getting Data 4...");
//     await getData(4);

//     console.log("Getting Data 5...");
//     await getData(5);
// };
 

//todo: IFIE in case of Await ---------

// (async function() {
//     console.log("Getting Data 1...");
//     await getData(1);

//     console.log("Getting Data 2...");
//     await getData(2);

//     console.log("Getting Data 3...");
//     await getData(3);

//     console.log("Getting Data 4...");
//     await getData(4);

//     console.log("Getting Data 5...");
//     await getData(5);
// })();


//todo: By Promise chain ---------

// getData(1).then(() => {
//     console.log(res);
//     getData.then(() => {
//         console.log(res); 
//     })
// })
//!

// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
        
//     })



// getData(1, () => {
//     console.log("Getting data 2...");
//     getData(2, () => {
//         console.log("Getting data 3...");
//         getData(3, () => {
//             console.log("Getting data 4...");
//             getData(4);
//         })
//     })
// })


// ! Promises ---------

// function asyncFunction() {
//     return new Promise((resolve, regect) => {
//         setTimeout(() => {
//             console.log("Some Data1");
//             resolve("Sucess");
//         }, 4000)
//     })
// }

// function asyncFunction2() {
//     return new Promise((resolve, regect) => {
//         setTimeout(() => {
//             console.log("Some Data2");
//             resolve("Sucess");
//         }, 4000)
//     })
// }

// console.log("Fetching data1...");
// let p1 = asyncFunction();
// p1.then((res) => {
//     console.log(res);

//     console.log("Fetching data2...");
//     let p2 = asyncFunction2();
//     p2.then((res) => {
//     console.log(res); 
//     })
// })



// console.log("Fetching data2...");
// let p2 = asyncFunction2();
// p2.then((res) => {
//     console.log(res); 
// })


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I'm a promise.");
//         // reject("Some error occured")
//         resolve("Sucess")
// })
// };

// let promise = getPromise();

// promise.then((res) => {                             // res = result
//         console.log("Promise fullfilled", res);
    
// });

// promise.catch((err) => {                            // err = error
//     console.log("ERROR OCCURED", err);
// })


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Sucess")
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 3000);
//     })
// }


//! ------------------ Aysnc Await -------------------

// async function Hello() {
//     console.log("Hello");
    
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
// }