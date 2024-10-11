
console.log("external");

function externalScript() {
    console.log("the external script / modified")
}

externalScript();

for( var i =0; i<5; i++){
 console.log(i);
 console.log("value of i is " + i);
 console.log("value of i is " , i, ".",  "    !");
 
 
//  externalScript();
}
// external js
// .js extension
// statements / functions


// defining the function
// function anyNameofFunction() {
//     console.log("this is an external function");
// }

// // calling/ invoking the function
// anyNameofFunction();