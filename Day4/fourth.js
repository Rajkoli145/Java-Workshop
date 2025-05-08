// Write the function that takes two intergers (hours, minutes), converts them to seconds and adds them.

// function convertToSeconds(hours, minutes) {
//     const hoursinsecs = hours * 3600;
//     const mininsecs = minutes * 60;
//     const totalSeconds = hoursinsecs + mininsecs;
//     return totalSeconds;

//   }

// console.log(convertToSeconds(1, 30));

// Object
// let a = {
//   name: "Raj koli",
//   age: 18,
//   city: "Navi mumbai",
// };
// console.log(a);

// let person = {
//     name: "Raj koli",
//     age: 18,
//     city: "Navi mumbai",
//     Pname: function(){
//         console.log(this.name + " " + this.age);
//         return this.age;
//     }
// };

// person.Pname();

// Parameterized function
// function person(name,age,loc,){
//     this.name=name;
//     this.age=age;
//     this.loc=loc;

// }
// const p1= new person("Raj",18,"Navi mumbai");
// p1.gender= "Male";
// console.log(p1.gender)
// console.log(p1)

// prototype:
// function person(name, age, loc) {
//   this.name = name;
//   this.age = age;
//   this.loc = loc;
//   this.pname = function () {
//     console.log("Hi")
//     // console.log(this.name + " " + this.age + " " + this.loc);

//   };
// }
// const p1 = new person("Raj", 18, "Navi mumbai");
// person.prototype.gender = "Male";
// console.log(p1);

// OOPS concept
// class person{
//     constructor(name,age,loc){
//         this.name= name;
//         this.age=age;
//         this.loc=loc;

//     }
//     Rname(){
//         console.log(this.name + " " + this.age);
//         return this.age;
//     }

// }

// const p1= new person("Raj", 18, "Navi Mumbai")

// Example:
// Make a automatic product with its 4 varients which will habe its own features and functionalities including the feachures of the main product.

// Main product class
// class AutomotiveProduct {
//   constructor(model, price,color) {
//     this.model = model;
//     this.price = price;
//     this.color=color;
//   }
// }
// const a = new AutomotiveProduct("m3", "1cr", "Red");
// a.feature = "Sunroof";

// const b = new AutomotiveProduct("m3", "1.5cr", "Black");
// b.feature = "Alloy Wheels";

// const c = new AutomotiveProduct("m3", "2cr", "Blue");
// c.feature = "Power Engine";
// console.log(a);
// console.log(b);
// console.log(c);


// Hierarchical Inheritance

// class Engineer {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class SoftwareEngineer extends Engineer {
//     constructor(name, language) {
//         super(name);
//         this.language = language;
//     }
// }

// class CivilEngineer extends Engineer {
//     constructor(name, project) {
//         super(name);
//         this.project = project;
//     }
// }

// const sEng = new SoftwareEngineer("Raj", "JavaScript");
// const cEng = new CivilEngineer("Pranav", "Building");

// console.log(sEng);
// console.log(cEng);


// Function as a argument
//  class Engineer {
//     constructor(name,a) {
//         this.name = name;
//         this.a=a;
//     }
//     a(){
//         console.log("Hello")
//     }
// }

// class SoftwareEngineer extends Engineer {
//     constructor(name, language) {
//         super(name);
//         this.language = language;
//     }
// }

// class CivilEngineer extends Engineer {
//     constructor(name, project) {
//         super(name);
//         this.project = project;
//     }
// }

// const sEng = new SoftwareEngineer("Raj", "JavaScript");
// const cEng = new CivilEngineer("Pranav", "Building");

// console.log(sEng);
// console.log(cEng);



// Parent class
class AutomotiveProduct {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

// Child 1
class Variant1 extends AutomotiveProduct {
    constructor(model, price) {
        super(model, price);
        this.feature = "sunroof";
    }
}

// Child 2
class Variant2 extends AutomotiveProduct {
    constructor(model, price) {
        super(model, price);
        this.feature = "michelin tyres";
    }
}

// Child 3
class Variant3 extends AutomotiveProduct {
    constructor(model, price) {
        super(model, price);
        this.feature = "W16 engine";
    }
}

// Creating objects
const var1 = new Variant1("m3", "1cr");
const var2 = new Variant2("m3", "1.5cr");
const var3 = new Variant3("m3", "2cr");

console.log(var1);
console.log(var3);
