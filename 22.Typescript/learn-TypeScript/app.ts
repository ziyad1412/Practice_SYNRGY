// Primitif Data Types
const myString:string = "Hello World";
console.log(myString);


// Number
const myNumber:number = 123;
console.log(myNumber);

// Boolean
const myBoolean:boolean = true;
console.log(myBoolean);

// Any
let myAny:any = "Hello World";
myAny = 123;
console.log(myAny);

// Array
const myArray:string[] = ["Hello", "World"];
console.log(myArray);


// Union
let myUnion:string|number = 123;
myUnion = "Hello World";

// Object
const myObject:{
    name:string,
    age:number
} = {
    name: "Hello World",
    age: 123
};
console.log(myObject.age);



// Object Type
type MyObject = {
    name:string,
    age:number
};

const myObject2:MyObject = {
    name: "Hello World",
    age: 123
};
console.log(myObject2.name);


// Object Interface
interface Person {
    name:string,
    age:number
};

const user:Person = {
    name: "Ziyad",
    age: 22
};
console.log(user.name);
