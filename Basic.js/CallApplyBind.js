// Call, apply and bind 
//? ye teeno tarike h function ko call karne ke liye kisi object ko this maan kar...


obj = { name: "Nikhil"}

function abcd(){
    console.log(this)
}
abcd.call(obj);  //todo: agr object paas nhi karte h to jaisa ki hume pta h function mai this is value window hoti h to vhi hogi 

//todo: In case of apply jab parameter bhi determine karna ho to apply ka use lete h... call and apply don't have massive difference

function abcd(a,b,c){
    console.log(this)
}
abcd.apply(obj,[1,2,3])

// todo: bind, bind is similar to call but bind function is not run sadenlly, we store the value to bind in a varible and use after

function abcd(){
    console.log(this)
}

const baadMaiChalaneKeLiyeFunc = abcd.call(obj);

baadMaiChalaneKeLiyeFunc();

