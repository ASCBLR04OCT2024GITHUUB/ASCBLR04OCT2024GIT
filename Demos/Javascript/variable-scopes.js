// Global Scope: globalVar is declared outside any function or block, so it is accessible from anywhere in the code.
// Function Scope: functionVar is declared inside the demonstrateScopes function, so it is only accessible within that function.
// Block Scope: blockVar and blockConst are declared inside an if block using let and const, so they are only accessible within that block.
// Global Scope
var globalVar = "I am a global variable";

function demonstrateScopes() {
    // Function Scope+
    var functionVar = "I am a function-scoped variable";

    if (true) {
        // Block Scope
        let blockVar = "I am a block-scoped variable";
        const blockConst = "I am also block-scoped";
        
        console.log(blockVar); // Accessible here
        console.log(blockConst); // Accessible here
    }

    console.log(globalVar); // Accessible here
    console.log(functionVar); // Accessible here

    // Trying to access block-scoped variables outside the block
    try {
        console.log("error here ! " , blockVar); // Error: blockVar is not defined
    } catch (e) {
        console.log("handled here !" , e.message);
    }

    try {
        console.log(blockConst); // Error: blockConst is not defined
    } catch (e) {
        console.log("handled again!", e.message);
    }
}

// demonstrateScopes();

console.log(globalVar); // Accessible here

// Trying to access function-scoped variable outside the function
try {
    console.log(functionVar); // Error: functionVar is not defined
} catch (e) {
    console.log(e.message);
}