// 2. Classes and Interfaces
// TypeScript supports classes and interfaces, which allow you to define blueprints for objects and enforce the structure of your code.
//  Java supports classes and interfaces, which allow you to define blueprints for objects and enforce the structure of your code.
// Interfaces define the shape of an object, specifying the types of its properties.

interface User {
    name: string;
    age: number;
    email: string;
}

const user: User = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

console.log(user); // Output: { name: 'John Doe', age: 30, email: '