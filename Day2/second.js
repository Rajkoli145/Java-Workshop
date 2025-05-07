// function tempconverter(celsius) {
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }
// let temp = prompt("Enter the temperature:");
// console.log(`${temp}°C is ${tempconverter(temp)}°F`);

// console.log("Hello")
// let str = "This is the \"string\""
// console.log(str)
// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str.indexOf("is"));
// console.log(str.lastIndexOf("is"));
// console.log(str.slice(0, -4));
// console.log(str.substring(0, -4));
// console.log(str.replace("is", "was"))
// console.log(str.at(0));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log()


// 
// function str() {
//     let string1 = prompt("Enter first string:");
//     let string2 = prompt("Enter second string:");
//     if(string1==string2){
//         console.log('True')
//     }
//     else{
//         console.log('False')
//     }
// }
// str();

// let str = "this"
// for(let s of str){
//     console.log(s)
// }


// let str1= prompt("Enter the string:")
// console.log(str1.slice(1));






// create a function that takes an array and a string as arguments and returns the index of the string. 
// function findIndex(list, word) {
//     return list.indexOf(word);
//   }
  
//   let words = ["The", "This", "These"];
//   let search = "The";
//   let result = findIndex(words, search);
  
//   console.log("Index of", search, "is:", result);
  

// Padding in Js
// str= "5";
// let padded = str.padEnd(5,"*")
// let padded1= str.padStart(5,"*")
// console.log(padded)
// console.log(padded1)


// {
//     str="This is the classroom"
// }
// console.log(str)


// In Js function don't worry about what number of argument or which type of parameter u are passing
// function demo(num1){
//     let str = "This is the classroom"
//     console.log(num1)
// }
// demo(4,7)
// // Output: 4


// Passing n number of parameter with one arguments
// function demo1(...num){
//     let str = "This is the classroom"
//     console.log(num)
// }
// demo1(4,4,6,5,2,9,6,7,2)

// deflaut parameter
// function demo1(fun=4,...num){
//     let str = "This is the classroom"
//     console.log(num)
//     console.log(fun)
// }
// demo1(4,4,6,5,2,9,6,7,2)


// minimalic Function:
// const func =() => console.log("HEllO")
// func()



// arr= [1,2,3,4,5,6,7,8,9,10]
// console.log(typeof arr)



// Create a function that takes a number as an argument and returns negative of that number. Retuns negative numbers without any change.

// function toNegative(num) {
 
//     if(num>0)
//         console.log(num*-1);
//     else{
//         console.log(num);
//     }
// }
// let input = prompt("Enter the number:");
// toNegative(input)


// function convertiontonegative(num){
        
//     if (num > 0){
//         console.log(num * -1);
//     }
//     else{
//         console.log(num);
//         }
//     }
// let num = prompt("Enter a number:");
// convertiontonegative(num);

// arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr[0]);
// console.log(arr[arr.length-1]);
// const arr1= new Array;
// ("this"," is ","a"," string");
// console.log(arr1[0]);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (x of arr){
//     console.log(x);
// }

// let arr4 = [1, 2, 3, 4, 5];
// let rev1 = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     rev.push(arr4[i]);
// }

// console.log(rev1); 

// console.log(arr4.length);
// console.log(arr4.push);
// console.log(arr4.pop());
// console.log(arr4.shift());
// console.log(arr4.unshift());

// console.log(arr4.slice(0, 2));
// console.log(arr4.splice(0, 2));
// console.log(arr4.flat());
// let arr = [1, 2, 3, 4, 5];
// let arr2 = ['a', 'b', 'c'];
// let arr3 = [1, 2, 3];


// console.log("concat:", arr2.concat(arr3)); // ['a', 'b', 'c', 1, 2, 3]


// console.log("join:", arr2.join('-')); // 'a-b-c'


// console.log("includes:", arr.includes(3)); // true


// console.log("indexOf:", arr.indexOf(3)); // 2


// console.log("lastIndexOf:", [1, 2, 3, 2, 1].lastIndexOf(2)); // 3


// let rev = [...arr];
// console.log("reverse:", rev.reverse()); // [5, 4, 3, 2, 1]


// let nums = [4, 2, 5, 1, 3];
// console.log("sort:", nums.sort((a, b) => a - b)); // [1, 2, 3, 4, 5]


// console.log("forEach:");
// arr.forEach(el => console.log(el * 2)); // 2, 4, 6, 8, 10


// let mapped = arr.map(n => n * 3);
// console.log("map:", mapped); // [3, 6, 9, 12, 15]


// let filtered = arr.filter(n => n % 2 === 0);
// console.log("filter:", filtered); // [2, 4]


// let sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log("reduce:", sum); // 15


// let found = arr.find(n => n > 3);
// console.log("find:", found); // 4


// let findIndex = arr.findIndex(n => n === 3);
// console.log("findIndex:", findIndex); 

// console.log("every:", arr.every(n => n > 0)); 


// console.log("some:", arr.some(n => n > 4)); 


// arr = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];

// arr.foreach((x,y,z) => {
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// );
// Array = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];
// Array.filter ((x,y,z) => {
//     if (x%2==0){
//         console.log(x);
//     }
// }
// );

// let f = (x,y,z) => {
//     if (x%2==0){
//         console.log(x);
//     }
// }
// Array.filter(f);
// function concat(){
// let arr = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];
// let arr2 = [11, 12, 13, 14, 15 ,16, 17, 18, 19, 20];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }
// }


// concat();

// function filter(num1, num2, arr = []) {
// for (let i = num1+1; i < num2; i++) {
//     arr.push(i);
        
//     }
// console.log(arr);
// }


// filter (10,20);
 










