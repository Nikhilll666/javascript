//todo: Selection

// cument.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// document.querySelector

// let btn = document.querySelector("button")
// btn.textContent = "Starting..."
// btn.innerHTML = "<i>Starting...</i>"


//? Question 1: 
//? Create an Html page with a button. When the button is clicked, change the text of the paragraph element.
// var p = document.createElement("p");
// p.textContent = "This Is Nikhil"
// document.querySelector("body").appendChild(p)

// var btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     document.querySelector("p").textContent = "Welcome..."
// })

//? Question 2: 
//? Create a page with two images and a button. When the button is clicked change the sorce attribute of the images. 

// var img1 = document.createElement("img");
// var src1 = img1.src = "https://img.pikbest.com/ai/illus_our/20230428/42ba1abfa644c38fe79a96e8e4331c8f.jpg!f305cw"
// document.querySelector('body').appendChild(img1)

// var img2 = document.createElement("img");
// var src2 = img2.src = "https://img.pikbest.com/wp/202347/disappointment-3d-podium-featuring-a-disappointed-emoji-with-an-emoticon-balloon-in-the-background_9761698.jpg!f305cw"
// document.querySelector('body').appendChild(img2)

// var br = document.createElement('br')
// document.querySelector('body').appendChild(br)

// var btn = document.createElement("button");
// btn.textContent = "Swap Image"
// document.querySelector('body').appendChild(btn)
 
// btn.addEventListener("click", function(){
//     img1.src = src2
//     img2.src = src1
// })

//? Quesion 3:
//? Create a form with input fields and a summit button. Use javascript to validate the form and display an error msg if the input is invalid.

// var inps = document.querySelectorAll('input[type = "text"]');
// var form = document.querySelector('form');
// var h4 = document.querySelector('h4');

// form.addEventListener('submit',function(event){
//     event.preventDefault();

//     for(var i = 0; i<inps.length; i++){
//         if(inps[i].value.trim() === ""){
//             h4.textContent = "Error, some feilds are blank."
//             h4.style.color = "red"
//             break;
//         }
//     }
// })

//? Question 4:
//? Create an unordered list. Allow user to add and remove list items dynamically using buttons.

// var inp = document.querySelector("input");
// var add = document.querySelector("#add")
// var remove = document.querySelector("#remove")
// var ul = document.querySelector("ul")
// var li;

// add.addEventListener("click", function(){
//     if(inp.value.trim() === ""){}
//     else{
//         li = document.createElement("li");
//         li.textContent = inp.value
//         ul.appendChild(li)
//         inp.value = ""
//     }
// })
// remove.addEventListener("click", function(){
//     ul.removeChild(li);
// })

//? Question 5:
//? Build a countdown timer that starts when a button is clicked and update the display in real time.

// var h3 = document.querySelector("h3");
// var start = document.querySelector("#start");
// var stop = document.querySelector("#stop")
// let interval;

// start.addEventListener("click", function(){
//     var count = 0;
//     interval = setInterval(function(){
//         h3.textContent = count;
//         count++;
//     },1000);
// })
// stop.addEventListener("click", function(){
//     clearInterval(interval);
// })

//? Question 6:
//? 

// var home = document.querySelector("#home")
// var about = document.querySelector("#about")
// var contact = document.querySelector("#contact")
// var h3 = document.querySelectorAll("h3")

// var hometext = document.querySelector("#hometext")
// var abouttext = document.querySelector("#abouttext")
// var contacttext = document.querySelector("#contacttext")

// hometext.style.display = "block"

// home.addEventListener("click", function(){
//     removeAllText();
//     hometext.style.display = "block"
// })

// about.addEventListener("click", function(){
//     removeAllText();
//     abouttext.style.display = "block"
// })

// contact.addEventListener("click", function(){
//     removeAllText();
//     contacttext.style.display = "block"
// })

// function removeAllText(){
//     h3.forEach(function(h3){
//         h3.style.display = "none";
//     })
// }


//? Question 7:
//?

// var prg = document.querySelector("#progress");
// var h3 = document.querySelector("h3");

// var count = 0;
// var int = setInterval(function(){
//     if(count === 100){
//         h3.style.opacity = 1;
//         clearInterval(int)
//     }
//     count++;
//     prg.style.width = count + '%'
// },50)


// //? Question 8:
// //?

// var input = document.querySelector("input");
// var data = [
//     {name: "parth", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "harsh", src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "zara", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "tvesha", src: "https://images.unsplash.com/photo-1568038479111-87bf80659645?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "harsita", src: "https://plus.unsplash.com/premium_photo-1681494639261-7908ef9d2257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "harsit", src: "https://plus.unsplash.com/premium_photo-1673734625879-2dd5410bc3e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
// ]
// var pers = "";
// data.forEach(function(elem){
//     pers += `<div class="person">
//                 <div class="img">
//                     <img src="${elem.src}" alt="">
//                 </div>
//                 <h4>${elem.name}</h4>
//             </div>`
// })

// document.querySelector(".people").innerHTML = pers;

// input.addEventListener("input", function(){
//     var matching = data.filter(function(e){
//         return e.name.startsWith(input.value)
//     })

//      var newuser = "";
//     matching.forEach(function(elem){
//         newuser += `<div class="person">
//                     <div class="img">
//                         <img src="${elem.src}" alt="">
//                     </div>
//                     <h4>${elem.name}</h4>
//                 </div>`
//     })

//     document.querySelector(".people").innerHTML = newuser;
// })

// Question 9:
//?

// var textarea = document.querySelector("textarea");
// var counter = document.querySelector("#counter")

// textarea.addEventListener("input", function(){
//     counter.textContent = textarea.value.match(/[a-zA-Z]/g).length;
// })

console.log("textarea");
