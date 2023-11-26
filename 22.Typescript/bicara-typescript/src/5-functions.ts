/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x:number, y:number,z?:number): number {  
    return x + y;
}

console.log(add(1,2));


// function expression
const addEx = function (x:number, y:number): number {
    return x + y;
};
console.log(addEx(1,2));



// arrow function
const addArrow = (x:number, y:number):number => x + y;
console.log(addArrow(1,2));

// function with no return value
const hello = (name:string) => console.log("hello " + name)
hello("world")

type Greeter = (name:string) => void
// function with callback
function request(url:string,cb:Greeter){
    cb(url);
}
let fn = (str:string) => console.log(str)
request("https://www.google.com",fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

type Contact = {
  firstName: string;
  lastName: string;
  gender?: string;
  languange: string;
}

function submitContact(firstName:string, lastName:string, languange:'english', gender?:string,): Contact{
  return {
    firstName: firstName,
    lastName: lastName,
    languange,
    ...(gender && { gender }),
  };
}

let result = submitContact('Ziyad','Udin','english','male');
console.log(result);

/********** 3. Rest Parameter  ***********/

function fruitsCollection(item:string, ...restItems: (string|number)[]) {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
console.log(fruits);


/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
function CT(param:string|number): string|number {
  return param
}
let resultCT = CT(1);
console.log(resultCT);