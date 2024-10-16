// 7. Union Types
// Union types allow you to specify that a variable can have multiple types.
// This is useful when a function can accept different types of input.
// For example, you can define a function that takes a string or a number as an argument.
function printId(id: string | number) {
    console.log(id);
}

printId("101"); // Output: 101
printId(101); // Output: 101

// You can also use union types with interfaces to define objects that can have different property types.
interface Circle {
    // The kind property is a literal type that specifies the shape of the object.
    kind: "circle";
    // The radius property is a number type that specifies the radius of the circle.
    radius: number;
    // Difference between literal type and string type?
    // A literal type is a type that represents a specific value, while a string type represents any string value.
}
interface Square {
    kind: "square";
    sideLength: number;
}

// usage
function getArea(shape: Circle | Square): number {
    switch (shape.kind) {
        case "circle":
            // ** is the exponentiation operator in TypeScript, which raises the base to the power of the exponent.
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
