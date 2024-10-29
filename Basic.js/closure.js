// Closure

//? ek function jo return kare doosra function, aur use kare parent func ka koi variable...

function abcd(){
    var a = 12;
    return function(){
        a++;
        console.log(a);
    }
}

var ans = abcd();
ans()
