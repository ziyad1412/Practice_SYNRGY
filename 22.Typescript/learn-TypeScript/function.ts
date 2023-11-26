export {}

// Function Add
function add(a: number, b: number): number {
    return a + b;
}

// Function Greeting
function greeting(name: string): string {
    return `Hello ${name}`;
}

// Function Summ ALl
function sumAll(numbers): number {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(add(1, 2));
console.log(greeting("Ziyad"));
console.log(sumAll([1, 2, 3, 4, 5]));