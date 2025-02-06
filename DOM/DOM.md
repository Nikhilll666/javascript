DOM
DOM Manipulation 

Usse                  ye kar do       ye hone per 
selection and save    change          event

Accessing Elements:
    cument.getElementById("#idName")
    document.getElementsByClassName(".className")
    document.getElementsByTagName("tagName for eg. h1")
    document.querySelector("can write id,class and tag name")

    suppose we have to target all h1 heading so here we can use...
    document.querySelectorAll("h1")

Modifying Elements:
    innerHTML, textContent

    let btn = document.querySelector("button")
    btn.textContent = "Starting..."
    btn.innerHTML = "<i>Starting...</i>"

Manipulating Styles and Classes:
    Style
    var h1 = document.querySelector("h1");
    h1.style.the-thing-in-which-you-want-changes(for eg. color)
    h1.style.color = "red";

    ClassList
    we already made a class in CSS. It can add or remove class. for eg. in class we created a class makeitred.
    h1.classList.add("makeitred")      here we don't need to add .class while writing the class name.
    h1.classList.remove("makeitred") 

Creating and Deleting Element:
    createElement()
    var h1 = document.createElement("h1");
    h1.textContent = "Hey";
    h1.classList.add = "makeitred";

    appendchild()
    kahaPerRakhoge.appendChild()
    for eg. in I've to add h1 in body...
    document.querySelector("body").appendChild(h1);
    var img = document.createElement("img");
    img.src = "url"
    document.querySelector("body").appendChild("img");

    removeChild()
    kahaSeHatanaH.removeChild()
    document.querySelector("body").removeChild(img)

Event Handing:
    addEventListener()

    var btn = document.querySelector("button");
    btn.addEventListener(event,callBack func.);

    btn.addEventListener("click", function(){})

Event Object
The Event object in JavaScript represents an event that takes place in the DOM (Document Object Model). 
When an event occurs, such as a user clicking a button, pressing a key, or submitting a form, an 
instance of the Event object is created and contains information about the event, such as the type of 
event and any data associated with it.

document.getElementById("myButton").addEventListener("click", function(event) {
  console.log("Button was clicked!");
  console.log("Event type: ", event.type); // "click"
  console.log("Target element: ", event.target); // The button element
  event.preventDefault(); // Prevents default behavior (if applicable)
});




