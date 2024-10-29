const myNums = [1,2,3,4,6,7,8,9,10]

// const newNums = myNums.filter((item)=> item>5)  //todo: 1st way
// console.log(newNums);

// const newNums = myNums.filter( (num) =>{           //todo: we have to use return keyword
//     return num>5
// } )
// console.log(newNums);

//! ----------------------------------------------------------- do it by for Each 
// const newNums = []
// myNums.forEach( (num) => {
//     if(num>5){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

// const myBooks = [
//     {
//         title: "Book 1",
//         genre: "Fiction",
//         publish: 1995,
//         edition: 2010,
//     },
//     {
//         title: "Book 2",
//         genre: "Non-Fiction",
//         publish: 1990,
//         edition: 2005,
//     },
//     {
//         title: "Book 3",
//         genre: "Science",
//         publish: 2000,
//         edition: 2015,
//     },
//     {
//         title: "Book 4",
//         genre: "History",
//         publish: 2005,
//         edition: 2020,
//     },
//     {
//         title: "Book 5",
//         genre: "Science",
//         publish: 2010,
//         edition: 2024,
//     },
//     {
//         title: "Book 1",
//         genre: "History",
//         publish: 1885,
//         edition: 2007,
//     }
// ]
// const BK = myBooks.filter( (bk) => {
//     return bk.genre === 'Science' && bk.publish === 2000
// })
// console.log(BK);
