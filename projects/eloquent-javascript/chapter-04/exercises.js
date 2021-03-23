////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// INPUT: start number, end number, step to increment by
// OUTPUT: array containing range of numbers between start and end (inclusive)
function range (start, end, step){
  // if there is no range, return empty array
  if(start === end){
    return [];
  }
  var rangeArray = [];
  // if step is not passed in, set step to 1
  if (step === undefined) step = 1;
  // set maxNum to higher number and minNum to lower number
  let maxNum = Math.max(start, end);
  let minNum = Math.min(start, end);
  // if step is negative
  if (step < 0) {
  	for(var i = maxNum; i <= minNum; i += step){
      rangeArray.push(i);
      }
  // if step is positive
  } else {
    for(var i = minNum; i <= maxNum; i += step){
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
// input: array of numbers
  let total = 0;
  // loop through the array of numbers
  for(let i = 0; i < array.length; i++){
    // add each element to the total
    total += array[i];
  }
  // return the sum of the numbers
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // input: array // output: a new array in inverse order
  let newArr = []; // where to add the elements starting from end of original array
  // loop through array
  for(let i = 0; i < array.length; i++){
    // for each loop, add value to beginning of new array
    newArr.unshift(array[i]);
  }
return newArr;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // input: array // output: modified array
  for (let i = 1; i < array.length; i++){
    let remove = array.splice(i, 1);
   	array.unshift(remove[0]);
	}
 return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // input: array // output: list object of nested objects
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(obj) {
  // BASE CASE: stop recursing once we hit the null property
  if(obj.rest === null){
    return [obj.value];
  } else {
  // RECURSIVE CASE
  return [obj.value].concat(listToArray(obj.rest));
  }
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(el, list) {
// input: an element and a list
// output: a list that adds the element to the front of the input list
  return {value: el, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
// input: a list and a number
// output: returns the element at the given position in the list or undefined if there no element

  // BASE CASE: if the list is empty, return undefined
  if (!list){
    return undefined;
    // if num passed in is 0, return first element
  } else if (num === 0){
    return list.value;
  } else {
  // RECURSIVE CASE:
    return nth(list.rest, num - 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
  // input: two values
  // output: boolean
  // returns true only if they are the same value or are objects with the same properties
  // where the values of the properties are equal when compared with a recursive call
  
  // if the values are the same, return true
  if (value1 === value2){
    return true;
  // else return false if either value is null or not an object
  } else if (value1 === null || typeof value1 !== 'object' || value2 === null || typeof value2 !== 'object'){
    return false;
  }
  // access both objects' keys
  const key1 = Object.keys(value1);
  const key2 = Object.keys(value2);
  // if the keys are not the same length, return false
  if (key1.length !== key2.length){
    return false;
  }
  // compare the keys
  for (let key of key1) {
    // if key of value1 does not equal same key of value2, return false,
    // call function recursively for other keys
    if (!key2.includes(key) || !deepEqual(value1[key], value2[key])){
      return false;
    }
  } // if all keys pass, return true
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
}