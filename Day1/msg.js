// function msg(){
//     alert("Welcome to JS workshop")
// }

// alert("Hi my Friend");
// let name = "Raj koli"
// let age = 30;


// function msg() {
//     alert("Hello from external script!");
// }
// let y = 10e40;
// let z = "hello world"
// let isTrue = true;
// let arr = [1,2,3,4,5];
// let obj = {name: "john",age:30};
// let func = function(){return "yessss"}
// let nullValue = null;
// let symb = Symbol("x")
// let BigValue = BigInt("1234567890123456789012345678901234567890")



// console.log(func())
// console.log(z)
// console.log(isTrue)
// console.log(arr)
// console.log(obj)
// console.log(nullValue)
// console.log(symb)
// console.log(y)

// let x_ = 5,y_ = '5';
// console.log(x_ === y_);
// console.log(x_ == y_);
// console.log(x_ !=y_)


// let num = prompt("Enter your age");
// if(num ==18){
//     console.log("You are Eligible for voting")
// }
// else{
//     console.log("You are not Eligible for voting")
// }


// let num1 = prompt("Enter the number:")
// console.log(typeof num1)

// function type(){
//     console.log(typeof num1);
// }
// type(prompt("Enter the value"))

// User authetication System:
// let Username = "admin";
// let Password = "12345";


// let enteredUsername = prompt("Enter username:");
// let enteredPassword = prompt("Enter password:");


// if(enteredUsername == Username && enteredPassword==Password){
//    alert("Login successful! ");
// }
// else{
//     alert("Invalid password");
// }



// Multiplication table: using for loop

// let num = prompt("Enter a number:");

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }

// // Multiplication table: using while loop
// let num1 = prompt("Enter a number:");
// let i = 1;
// while (i <= 10) {
//     console.log(num1 + " x " + i + " = " + (num1 * i));
//     i++;
// }



// A Day Finder using switch day 
// let day= prompt("Enter the number between 1-7:")
// switch(day){
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Enter the number between 1-7")
 
// }


// for in 
// let unit={}
// unit.names = 'Raju'
// unit.age=20;

// console.log(unit);
// for(x in unit){
//     console.log(x, unit[x]);
// }

// for of


// User authetication System: using sets in sets
let student = {
    name: "Raj",
    degree: "Btech-CSE",
    age:18,
    dob:"31:10:2006",
    password: "pass123"


}
let a = prompt("Enter your name")
let p = prompt("Enter your password")

student.address = "Navi Mumbai, India";
for(x in student){
    if(student.name == a && student.password == p){
        console.log("Authorised!")

    }else {
        console.log("Not authorised!")
    }
}


// Go throught the math library