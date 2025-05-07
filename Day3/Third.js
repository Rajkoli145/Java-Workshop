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


