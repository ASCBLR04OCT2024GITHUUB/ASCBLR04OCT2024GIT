var myname = "Rambo";
console.log(myname);
console.log(typeof myname);

var num = 42;
console.log(num);
console.log(typeof num);

// print multiple values in on console.log
console.log(myname, num);
console.log(typeof myname, typeof num);

//formatted output using console.log
console.log("My name is:", myname);
// with placeholder
console.log("My name is: %s", myname);
// other formats like %s
console.log("My name is: %s and my age is: %d", myname, num);
// more formats
console.log("My name is: %s and my age is: %d and my status is: %s", myname, num, true);

// datatype for floating point values
var floatNum = 3.14;
console.log(floatNum);
console.log(typeof floatNum);
//formatted printing of floating point values
console.log("Value of pi is: %f", floatNum);


//an array of healthy vegetables
var veggies = ["Carrot", "Broccoli", "Spinach", "Kale"];
//loop and print
for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

//a multidimensional array with the vegetable and its color
var healthColors = [
    ["Carrot", "Orange"],
    ["Broccoli", "Green"],
    ["Spinach", "Green"],
    ["Kale", "Green"]
];

//add a blue color fruit
healthColors.push(["Blueberry", "Blue"]);
//add black color fruit
healthColors.push(["Blackberry", "Black"]);

// print the fruits/vegetables as a list
for (var i = 0; i < healthColors.length; i++) {
    console.log(healthColors[i][0] + " - " + healthColors[i][1]);
}

console.log("healthColors:", healthColors);
// add mango at index 2
healthColors.splice(2, 0, ["Mango", "Yellow"]);
console.log("healthColors:", healthColors);


//Assignment on Javascript Arrays :
// Good 5 methods, Great 10 methods, Excellent 15 methods
// Tabulation of frequently used Array methods with their description
// Method          Description
// push()          Adds one or more elements to the end of an array and returns the new length of the array.
// pop()           Removes the last element from an array and returns that element.
// shift()         Removes the first element from an array and returns that element.
// unshift()       Adds one or more elements to the beginning of an array and returns the new length of the array.
// slice()         Extracts a section of an array and returns a new array.
// splice()        Adds or removes elements from an array at a specified index.
// concat()        Combines two or more arrays and returns a new array.
// join()          Joins all elements of an array into a string.
// indexOf()       Returns the first index at which a given element can be found in the array.
// lastIndexOf()   Returns the last index at which a given element can be found in the array.
// includes()      Determines whether an array includes a certain element.
// reverse()       Reverses the elements of an array in place.
// sort()          Sorts the elements of an array in place.
// filter()        Creates a new array with all elements that pass the test implemented by the provided function.
// map()           Creates a new array with the results of calling a provided function on every element in the array.
// reduce()        Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// forEach()       Executes a provided function once for each array element.
// find()          Returns the first element in an array that satisfies a provided testing function.
// findIndex()     Returns the index of the first element in an array that satisfies a provided testing function.
// some()          Checks if at least one element in an array satisfies a provided testing function.
// every()         Checks if all elements in an array satisfy a provided testing function.
// fill()          Fills all the elements of an array from a start index to an end index with a static value.
