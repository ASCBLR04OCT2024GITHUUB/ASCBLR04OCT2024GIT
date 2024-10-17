console.log("Typescript Features");
// 1. Static Typing
// TypeScript introduces static typing to JavaScript, allowing you to define the types of variables, function parameters, and return values. This helps you catch errors at compile time, rather than at runtime.

function add(a: number, b: number): number {
    return a + b;
}


//scribble
// function functionName(var : vartype, var2: vartype): returntype {
//     // return var + var2;
//     return ;
// }
// function functionName(var : vartype){
// }

const result = add(5, 10);
console.log(result); // Output: 15