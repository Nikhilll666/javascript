<!-- Java Script Learning path -->

JS the language----

Basics
Inbuilt features
variables constants
compilers and interpreters
window 
types
conditionals
loops 
functions 
return
undefined, not defined, nulll 
arrays
objects
asynchrous 
ES6 climax
questions
miscellaneous -switch case & ternary, do-while, forIn, forOf


<!-- interview prep -->

Understanding this, call, apply, bind
Prototype inheritance
Closures
event delegation
Higher-order functions
Error Handling (try...catch blocks)
Custom Events

<!-- if-else------------ -->
falsy value ----
null, undefined, NaN, 0, "", '', document.all false 
can check by -------Boolean(null) <!-- it gives false.>

<!-- Expect this all values are truthy value -->


loops = repeat 
<!-- for, while, do-while, forEach, forIn, forOf------------ -->


synchronous code mein code hamesha line by line chalta hai ...

async code line by line nhi chalta, saara async code ek saath suru kar diya jata h and jo pahle complete ho jaye uska answer dediya jata h...

call aaply bind 
ye teen tareeke h function ko call karne ke kisi object ko this maan kr ...

Prototypal Inheritance
hum objects create karte hai and kisi ek parent constructor function ke prototype mai kuch add kr dete hai and jab bhi add hota to wo parent se banne wale sabhi children instances ko wo peoperties jo parent ko prototype mein di gyi thi wo milti hai saugaat mai...


<!-- retun -->
jaha per return lagega uske aage jo bhi likhoge wo jayega vaha per jaha function call hua tha, return functions ke andar lagta h it means if you write your function in the 1st line and you are calling your function in the 10th line so what return will do it'll send the ans of function in the 10th line.

aisa function jo kuch return nhi karta vo bhi undefind return karta 
function(){
    retrun; <!-- it'll show undefind>
}


<!-- undefind, not defined, null -->

<!-- undefined is value -->
ye value tab di jaati h jab variable ko koi value na mili ho, iska matlab h, ye ek garbage value ki trh treat ki jati h, you can call it a default value.

<!-- not defined is an error -->
koi particular element/ identity ko use karna without it's declaration gives an error, and that error is not defined (reference error)

<!-- null is also a value -->
this is a value which resolve like, not found.
null is recieved when something is not found...


<!-- Higher Order Function -->

aisa koi func jo ki ek function ko parameter mein accept karle and/or ek function ko return kr de that is called Higher order function.
eg:- forEach

<!-- Difference b/w closure and higher order function closure ko parent ka variable use karna hoga -->

<!-- Callback Hell -->

