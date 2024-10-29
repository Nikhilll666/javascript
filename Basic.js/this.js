//? global - window
console.log(this);


//? function - window
function abcd(){
    // console.log(this)
}
// abcd()

//? method - object
var obj = {
    name: function(){
        console.log(this)
    },
    age: 18,
    email: "nikhl23@navgurukul.org"
}
// obj.name();


//? fnc inside method (es5)- window
var obj2 = {
    sayname: function(){
        console.log(this.age);  // you can acess your age her 
        function childfunc(){
            console.log(this.age);  // but not here bcz here it turns into window
        }

        childfunc()
    },
    age: 25,
}
// obj2.sayname()


//? fnc inside method (es6)- object
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


//? constructor fnc mein this ki value  - new bank object
function add(){
    console.log(this);
}
// const ans = new add();


//? event listener mai this ki value  - that element jisper event lit. laga ho 
// document.querySelector("button")
// .addEventListener("click", function(){
//     console.log(this);
// })



