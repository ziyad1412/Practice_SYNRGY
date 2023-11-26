/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

let list = [1, 2, 3, 4];

let list1: number[];
list1 = [1, 2, 3, 4];

let list2: Array<number>;
list2 = [1, 2, 3, 4];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

let string2: Array<string>;
string2 = ['a', 'b', 'c'];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

let union2: (string | number)[];
union2 = ['hello', 1, 2, 3];

let union3: Array<string | number>;
union3 = ['hello', 1, 2, 3];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

let tuple: [string, number, number, number];
tuple = ['cordinat', 2, 4, 7];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

let object: { color: string; index: number }[];
object = [
  { color: 'blue', index: 1 },
  { color: 'red', index: 2 },
];

let object2: Array<{ color: string; index: number }>;

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */

let matrix: number[][];
matrix = [
  [1, 2],
  [3, 4],
];

let matrix2: Array<Array<number>>;
matrix2 = [
  [1, 2],
  [3, 4],
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */
let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];