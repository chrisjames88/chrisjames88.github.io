// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  // use the reduce method in combination with the concat method to flatten an array of arrays
  return array.reduce((newArr, curArr) => newArr = newArr.concat(curArr));
}


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, funcTest, funcUpdate, funcBody) {
  // like a for loop statement
  // inputs: a value, a test function, an update function, a body function
  // each iteration, it first runs the test func on the current loop value and stops if that returns false
  
  // start at value; while the test of the value is still truthy; update the value
  for(let start = value; funcTest(value); value = funcUpdate(value)){
      // call the funcBody with current value
      funcBody(value)
    };
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, funcTest) {
  // apply test to each element in array
  // if any test is not truthy, then all tests fail
  return !array.some(el => !funcTest(el));
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
  // write a function that computes the dominant writing direction in a string of text
  // dominant direction is the direction of a majority of characters
  
  const arr = countBy(str, function(char){
    // get the unicode value for the current char
    const unicode = char.charCodeAt();
    // find the script object from the unicode character
    const script = characterScript(unicode);
    // return the direction of the script (symbols are null)
    if(script !== null){
      return script.direction;
    } else {
      return script;
    }
  });
  
  // find the highest count by sorting
  arr.sort(function(a, b){
    return b.count - a.count // using count property
  });
  // return the 1st index with the direction property
  return arr[0].name;
  
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
