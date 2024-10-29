const myNums = [1,2,3]

//// todo: By names function

// const myTotal = myNums.reduce( function (accumulator,current_value){
//     console.log(accumulator,current_value);
    
//     return accumulator + current_value
// },0)
// console.log(myTotal);

// //todo: by arrow function

// const myTotal = myNums.reduce((acc,curValue) => {
//     console.log(acc,curValue);
    
//     return acc+curValue
// },3)

// console.log(myTotal);

//! we can use this in shopping card

const shoppingcard = [
    {
        itemName: "js course",
        price: 999,
    },
    {
        itemName: "python",
        price: 1999,
    },
    {
        itemName: "java",
        price: 2999,
    }
]

const priceToPay = shoppingcard.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);

