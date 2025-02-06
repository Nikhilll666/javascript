//? setTimeout         setTimeout ka code kuch der baad chalta h

// setTimeout(function(){
//     console.log("Hey...");
    
// },2000)

//? setInterval        setInterval ka code kuch der baad chalta h baar baar ek perticular time mein.

// var i = 1
// const int = setInterval(function(){
//     if (i === 5){
//         clearInterval(int)
//     }
//     console.log(`Hey ${i}...`);
//     i++;
// },2000)

//? Fectch API         ye kisi or URL per ja kar kuch data layega ya data hamare paas se us URL per le kar jayega 

// fetch(`https://randomuser.me/api/`)
// .then(row => row.json())
// .then(readable => console.log(readable.results[0].gender));

//? Axios (or other HTTP libraries)             ye bhi vahi karega jo fetch krta h bs ye thoda jyada developer friendly h

// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result.data.results[0].gender))

//? Promises :- promises, kuch code socho mann mai jo ki async code ho matlab ki ye side stack mai jayega
//? or baad mai chalega main code ke ab ye socho ki aapne is code ko likha h to iska answer hi kabhi aayega
//? aur aisa bhi ho skta h ki iska answer na aaye promises kya h aisa samjho ki aap promises ke ander koi bhi
//? async code likh do jo mann mai aaye aur promises aapko ek parchi dedeta h and vo parchi per by default likha hota h
//? waiting, parchi per 2 event hote h mainly ek event ka naam h then aur ek event ka naam h catch, agr aapka data aa
//? gya parchi pe resolve likh jayega waiting ki jagah and then chalega aur agr data mai dikkat aayi to catch chalega
//? and then waiting ki jagah reject likh jayega...

// const parchi = new Promise(function(resolve, reject) {
//     fetch(`https://randomuser.me/api/`)
//     .then(row => row.json())
//     .then(readeable => {
//         if(readeable.results[0].gender === "male") resolve();
//         else reject();
// });
// });

// parchi
// .then(function(){
//     console.log("Resolved parchi");
// })
// .catch(function(){
//     console.log("Reject parchi");
// })

// function dataFecther(URL){
//     const parchi = new Promise(function(resolve, reject){
//         fetch(URL)
//         .then(row => row.json())
//         .then(result => {
//             resolve(result)
//         })
//     })

//     return parchi;
// }

// dataFecther("https://randomuser.me/api/")
// .then(function(result){
//     console.log(result);
// })


//? Callbacks

//? Callbacks kuch khaas nhi bs sirf ek function hota h bs thoda jo h vo ye h ki isse paas kiya jata h as an argument
//? jab perticular anync code chal jaye...
//? callback kuch bhi nhi ek function jisse paas kiya gya ho kisi or function mai or jab vo function chale to aap uss 
//? paas kiye gye function ko chala payenge

// function doSomeAsyncTask(URL, callback){
//     fetch(URL)
//     .then(row => row.json())
//     .then(result => {
//         callback(result);
//     })
// }

// doSomeAsyncTask("https://randomuser.me/api/", function(result){
//     console.log(`Gender: ${result.results[0].gender} \nEmail: ${result.results[0].email} \nName: ${result.results[0].name.first}`);
// });

//? Aync/Await 
//? Koi bhi function bna lo and uske ander jo mann mai aaye vo async code likh do, ab jab aap async likhte ho to baad
//? wali line pahle chal jati h kyuki async side stack mein hota h aur baad wali line agr async ke basis per huyi to aapka
//? code fail ho jayega vo isliye kyuki aapka code depend karta h async code pe jo ki baad mein mai chalega sync code
//? chalne ke baad

//? With async await aap async code bhi aise likh sakte ho jaise ki aap normal sync code likh rhe ho

// async function abcd(){
//     let a = await fetch(`https://randomuser.me/api/`);
//     a = await a.json(); 
//     console.log(a);;
      
// }
// abcd();

async function dataFecther(URL){
    let data = await fetch(URL);
    let result = await data.json();
    return result;
}
async function Async(){
    const data = await dataFecther("https://randomuser.me/api/")
    console.log(data);
    
}
Async();