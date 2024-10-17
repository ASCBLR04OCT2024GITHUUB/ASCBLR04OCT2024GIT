// 4. Generics
// Generics allow you to create reusable components that work with any data type.
function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42);
const str = identity<string>("Hello");

console.log(num); // Output: 42
console.log(str); // Output: Hello
