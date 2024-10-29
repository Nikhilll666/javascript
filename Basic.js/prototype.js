//! Prototype inheritance

// hum object create karte h and kisi ek parent constructor function ke prototype
// mein kuch add kr dete h and jab bhi add hota h to wo parent se banne wale sabhi
// children instances ko vo properties jo parent ko prototype mai di gyi thi wo milti
// h saugaat mein...


function makeHuman(){
    this.name = "Nikhil";
    this.age = 18;
}

var ans = new makeHuman();

// ek function jo ki this ka use kar rha ho and new ke dwara naye naye objects bana ke deta ho 
// aise function ko constructor functio kahte h...

function abcd(){
    this.username = "Nikhil";
    var calc = 12*3;
}
// var ans = new abcd(); //? the value of clac not get into the black object bcz this is the blank 
                //? object but isn't mean calc don't have any mean it has its own meaning..


// aisa koi bhi function jismein this ka use kar rhe h aur us function ko call karte wakt
// new ka use kare, to new ka matlab vaha per ek blank object ho jata h...

function makeHuman(name,age){
    this.name = name;
    this.age = age;
    //! if we write printMyName func here then the human1 human2 both will consume memories
    //! so by writting below we saving memory or both human1 and human2 have printMyName func.
}
makeHuman.prototype.printMyName = function(){
    console.log(this.name);     //!that is called protopyte in heritance.
}

const human1 = new makeHuman("Nikhil", 18);
const human2 = new makeHuman("Nikita", 19);