// Function Add
function add(a, b) {
  return a + b;
}
// Function Greeting
function greeting(name) {
  return "Hello ".concat(name);
}
// Function Summ ALl
function sumAll(numbers) {
  return numbers.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}
add(1, 2);
greeting("Ziyad");
sumAll([1, 2, 3, 4, 5]);
