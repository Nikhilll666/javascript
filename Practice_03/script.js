//! Feching API

// const URL = "https://dog.ceo/api/breeds/image/random"

// const getFacts = async () => {
//     console.log("Getting Data...");
//     let response = await fetch(URL);
//     console.log(response);

//     let data = await response.json();
//     console.log(data.message);
    
// }

const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json";

// const dropdown = document.querySelectorAll(".dropdown select");

// for (let select of dropdown) {
//     for (let currcode in countryList) {
//         let newOption = document.createElement("Option")
//         newOption.innerText = currcode ;
//         newOption.value = currcode;
        
//         if (select.name === "form" && currcode === "usd") {
//             newOption.selected = "selected";
//         }        
//     }
// }


const dropdown = document.querySelectorAll(".dropdown select");

for (let select of dropdown) {
    for (let currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        
        if (select.name === "from" && currcode === "usd") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currcode === "inr") {
            newOption.selected = "selected";
        } 

        // Append the new option to the select element
        select.appendChild(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currcode = element.value;
    let countryCode = countryList[currcode].toUpperCase();

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");

    img.src = newSrc;
}
