////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  // write a function min that takes two arguments and returns their minimum
  return (num1 <= num2) ? num1 : num2;
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  // BASE CASE
  if (num === 0){ // if num is even
    return true; // return true
  } else if (num === 1){ // if number is odd
    return false; // return false
  // RECURSIVE CASE
  } else if (num > 0){ // if number is positive and not yet 0 or 1
    return isEven(num - 2); // return the function again passing in num - 2
    //edge case: negative numbers
  } else { // if number is negative
    return isEven(-num); // turns the number into a positive number before passing into function again
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  // write a function that takes a string and a character
  // return a number that indicates how many times the char exists in the string
  let charCount = 0; // charCount will hold number of char occurrences
  for (let i = 0; i < string.length; i++){ // loop through string
    if(string[i] === char) charCount++; // each time char exists is string, add 1 to charCount
  } return charCount; // return number of occurrences
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  // write a function that takes a string as its only argument
  // return a number that indicates how many uppercase 'B' chars are in the string
  let bCount = 0; // bCount will hold number of char occurrences
  for (let i = 0; i < string.length; i++){ // loop through string
    if(string[i] === 'B') bCount++; // each time B exists is string, add 1 to bCount
  } return bCount; // return number of occurrences
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
