/**
 * DATATYPES:
 *
 * 0. There are many different types of data we manipulate or work with in programming. The various
 * classifications are called: primitive, or simple, datatypes and complex datatypes. We will look
 * into these different types below.
 *
 *      
 *
 * 1.  PRIMITIVE DATATYPES: Primitive datatypes have distinctive characteristics - they are 
 * immutable (unchangeable), hold 8-bytes of memory, and are copy by value, meaning when they 
 * are assigned to another value or variable, the original value is not changed. Below is an example 
 * of copy by value:
 */     
        let x = 420;
        console.log(x); // prints: 420
        let y = "This is an example of copy by value with another datatype";
        console.log(y); // prints: "This is an example of copy by value with another datatype"
        
        let a = x;
        console.log(a); // prints: 420
        let b = y;
        console.log(y); // prints: "This is an example of copy by value with another datatype"
        
        // When we change the copy, we do not change the original
        a = 900;
        console.log(a, x); // prints: 900, 420
        b = "y is not changed";
        console.log(b, y); // prints: "This is an example of copy by value with another datatype", 
        // "y is not changed"
        
        
/* 2.  PRIMITIVE DATATYPE EXAMPLES: Numbers, strings, booleans, NaN, undefined and Null values. 
 *
 *      Numerical data includes whole numbers, negative integers, and numbers with decimal points.:
 
 */         var numberExample = 69; // This is an example of a number.
            console.log(numberExample); // prints: 69
    
//      Strings are characters placed inside of quotation marks.:

            var stringExample = "This is a string.";
            console.log(stringExample); // prints: "This is a string."
            
/*          Strings have a length property that tells the user how many characters are in the string.
            Access this property by using the .length method. Access individual characters in a string 
            by placing its index in brackets. Use [0] to access the FIRST character 
            in a string and use .length - 1 to access the LAST character in a string.
            
 */         var example = "Example string";
            console.log(example.length); // prints: 14
            example[0]; // Prints “E”
            example[3]; // Prints "m"
            example[example.length - 1]; // prints: "g"

//      Booleans evaluate to true or false:

            var booleanExample = 420 < 69;
            console.log(booleanExample); // prints: false
            
//      NaN values are numerical data that are undefined or not a readable number for the interpreter.

            var exampleNan = 50 / "Hello World";
            console.log(exampleNan); /* prints: NaN. You cannot perform arithmetic actions with 
            datatypes that are not numbers. 
            */
            
//      Undefined data do not hold any values.
            var iAmUndefined;
            console.log(iAmUndefined); /* prints: undefined. The variable is not assigned a value. */
            
//       Null is an empty value.
            var exampleNull = null;
            console.log(exampleNull); // prints: null to the console.
            
//      Object {}
             var monthsObject = {
                month: "December",
                holidays: ["Kawanza", "Christmas", "Birthday"],
                numberOfDays: 31
}

monthsObject.month; // "December" will print to the screen"
monthsObject["holidays"]; // ["Kawanza", "Christmas", "Birthday"] will print



/** 
 * 3.  COMPLEX DATATYPES: Complex datatypes have characteristics that make them unique from primitive datatypes.
 * They are mutable and therefore can hold more than 8 bytes of memory and hold various kinds of datatypes.
 * Complex datatypes are copy by reference, therefore copies made from their values are references to the original
 * value. When you change the copy, you change the original value. For example:
 */
    let originalArray = [];
    originalArray.push("Time for a vacation");
    console.log(originalArray); // prints: ["We are living in a global pandemic."];
        
    /** If we assign a new variable to our originalArray, any changes we make to our original variable affect
     * our new variable, and vice versa.
     */ 
    let copyArr = originalArray;
    originalArray.push("Right Now!");
    console.log(originalArray, copyArr); 
    /** Prints ["Time for a vacation".", "Right Now!"], 
    * ["Time for a vacation"", "Right Now!"];
    */ 