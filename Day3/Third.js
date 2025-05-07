// Demonstrates function borrowing using call() to set the this context for a method from one object to another.
// console.log("Hello")

// const person={
//     Pname: function(){
//         console.log(this.name + " " + this.age + " " + this.city);
//         return this.age;
//     }

// }
// const person1={
//     name: "Raj",
//     age:30,
//     city: "Navi Mumbai"

// };

// person.Pname.call(person1);
// person.Pname.apply(person1);



// arr=[1,2,3,4,5,6,7,8,9,10]
// // for (item of arr){
// //     console.log(item)
// // }

// let iter = arr[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())




// function example1() {
//     let state1 = "Hii there!!";
//     let state2= "Hello"
//     console.log(state1)
//     return(state1)
//     console.log(state2)
  
    
// }
// example1();



// Generator Functions
// function* gen(){
//     console.log("Hello")
//     yield 1;
//     console.log("world")
//     yield 2;
//     console.log("Goodbye")
// }
// const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())




// // Pattern it should content 6 rows using * pyramid
// for (let i = 1; i <= 6; i++) {
//     let str = "";
//     for (let j = 1; j <= 6 - i; j++) {
//         str += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         str += "*";
//     }
//     console.log(str);
// }


// function myDisplay(some){
//     console.log(some)
// }

// let myDisplay = new Promise(function(myDisplay,myReject){
//     let x = 0;
//     if(x==0){
//         myResolve("Ok");
//     }
//     else{
//         myReject("Error");
//     }
// }
// );

// myPromise.then(
//     function(value) {myDisplay(value);},
//     function(error){myDisplay(error);}

// );

// function showMessage(msg) {
//     console.log(msg);
// }

// let x = 5;

// let myPromise = new Promise((resolve, reject) => {
//     if (x > 0) {
//         resolve("Number is positive");
//     } else {
//         reject("Number is not positive");
//     }
// });

// myPromise.then(
//     function(value) {
//         showMessage(value);
//     },
//     function(error) {
//         showMessage(error);
//     }
// );



// // Another way to write promise:
// async function myfunction() {
//     return 8+2;
// }
// myfunction().then(
//     function(value) {console.log(value)},
//     function(error) {console.log(error)}
// )


// async function myfunction() {
//     let pro = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Hello world inner")
//             console.log("Hello world")
//     },2000)
//     });  



// let result = await pro;
// console.log(result)
// }
// myfunction().then(
//     function(value) {console.log(value)},
//     function(error) {console.log(error)}
// )


// function fetchdData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve({ data: "This is the fetched data" });
//         }, 2000);
// });
// }

// // Async function to handle fetching and processing data
// async function processdata() {
// try{
//     console.log("Fetching data..");
//     const result = await fetchdData();
//     console.log("Data fetched:",result.data)
//     return result.data;
// }   
// catch(error){
//     console.log("Error Fetching data:",error);
//     throw error;
// }
// }

// // Call the sync Functions:
// processdata()
// .then(processData =>{
//     console.log("Processed data:",processData)
// })
// .catch(error => {
//     console.error("Final erorr:",error);
// });


// DOM (Document Object Model)






