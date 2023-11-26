/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// type inference(Implicit)
let ti = 'hello';

// type annotation(Explicit)
let ta: string;
ta = 'hello ts';

/********** Javascript Types ***********/

let a;                  // undefined
let b:boolean;
b = true;           // boolean
let c:number;
c = 1;              // number
let d:string;
d = "hello";        // string
let e:bigint;
e = 100n;           // big int (starting ES2020)
let f:symbol;
f = Symbol("Sym");  // symbol  (starting ES2015)
let g:() => void; 
g = function () {   // function
  return null;
};
let h:null;
h = null;           // null ( special primitive )
let i;
i = {};             // Object Literal
let j:[];
j = [];             // array

class Product {
  // class
  //...
}
let k = new Product();

let z:any;
z=123
z="hello"
z=true

/********** Function sum ***********/
function sum(a:number, b:number):number {
  return a + b;
}   
let result = sum(1, 2);
console.log(result);

/********** Union ***********/
let union: string | number;
union = 1;
union = 'hello';

/********** Type aliases ***********/
type StringOrNumber = string | number;
