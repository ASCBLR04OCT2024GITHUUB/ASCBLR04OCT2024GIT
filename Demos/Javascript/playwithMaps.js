const wordsMap = new Map();
wordsMap.set('serendipity', 'the occurrence of events by chance in a happy or beneficial way');
wordsMap.set('ephemeral', 'lasting for a very short time');
wordsMap.set('sonder', 'the realization that each passerby has a life as vivid and complex as your own');
wordsMap.set('limerence', 'the state of being infatuated or obsessed with another person');
wordsMap.set('petrichor', 'a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather');

// Map is a collection of elements where each element is a key-value pair
// The keys are unique and the values can be anything
// The keys can be of any type
// The values can be of any type
// The keys are used to retrieve the values
// The keys are used to remove the values
// The keys are used to check if the values exist
// The keys are used to iterate over the values
// The values can be duplicated
 
// Display the Map
console.log(wordsMap);

// Convert Map to an array of key-value pairs using spread operator
const wordsArray = [...wordsMap];
console.log('array *************** ', wordsArray);

// // Convert Map to an object using spread operator
// const wordsObject = Object.fromEntries(wordsMap);
// console.log("Word object : " , wordsObject);

// Destructure the first word and its meaning from the Map
const [firstWord, firstMeaning] = wordsArray[0];
console.log(`Word: ${firstWord}, Meaning: ${firstMeaning}`);

// Iterate over the Map using forEach
// wordsMap.forEach((value, key) => {
//     console.log(`Key: ${key}, Value: ${value}`);
//     // console.log('Key: ' + key + ', Value: ' + value);
// });


``
// Iterate over the Map using for...of loop
for (const [key, value] of wordsMap) {
    console.log(`FOR.. OF Key: ${key}, Value: ${value}`);
}

// Iterate over the Map using entries method
// for (const [key, value] of wordsMap.entries()) {
//     console.log(`ENTIRES Key: ${key}, Value: ${value}`);
// }