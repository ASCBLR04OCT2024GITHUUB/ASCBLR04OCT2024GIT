import { sum,divide } from "./module1-export"; // Importing named exports
// import { divide } from "./module1-export";
const result = sum(5, 10);
console.log(result); // Output: 15
const result1 = divide(10, 2);
console.log(result1); // Output: 5