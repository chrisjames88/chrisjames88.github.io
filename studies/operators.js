/*
 * OPERATORS:
 *
 * 0. Assignment operators: assign a value to its left operand based on the value of its right operand
 * Examples:
 *      = operator: assigns a value on the right of the operator to a variable on the left of the operator
 *      += operator: add the value of a variable by the number on the right of the operator
 *         and reassigns the variable to the new number
 *      -= operator: subtracts the value of a variable by the number on the right of the operator
 *         and reassigns the variable to the new number
 *      *= operator: multiplies the value of a variable by the number on the right of the operator
 *         and reassigns the variable to the new number
 *      /= operator: divides the value of a variable by the number on the right of the operator
 *         and reassigns the variable to the new number
 */
        var canDrive = true; // assigns a boolean value to the variable canDrive
        
        var num = 5; // assigns a number to the variable num
        num +=2; // reassigned num to its previous value + 2
        console.log(num); // prints: 7
/*
 * 1. Arithmetic operators: take numerical values as their operands and return a single numerical value
 * + - / * %
 *      + operator: adds two numbers or strings
 *        Aside from its mathematical purposes, the + operator can also be used to combine two or
 *        more strings into one. This is called string concatenation.
 *        Note: To add a space between the strings, you must use a space string
 */
        var stringOne = "Hello";
        var stringTwo = "World";
        var newString = stringOne + ' ' + stringTwo;
/*      
 *      - operator: subtracts two numbers
 *      * operator: multiplies two numbers
 *      / operator: divides two numbers
 *      % operator: finds the remainder of two numbers
 */
        var numModulus = 9 % 2; // prints: 1
        
//      ++ operator: increments a number by 1
        var a = 4;
        var b = ++a; // prints: 5
        // NOTE: If the operator is to the left of the operand, the operator will increment before returning the value.
        var c = a++; // prints: 4
        // NOTE: If the operator is the the right of the operand, the operator will return the value before incrementing.
        
//      -- operator: decrements a number by 1
        var d = 7;
        var e = --d; // prints: 6
        var f = d--; // prints: 7
/*
 * 2. Comparison operators: compares its operands and returns a boolean value based on whether the comparison is true
 * Comparison operators are used to find boolean values based on if the operand is greater than, less than,
 * greater than or equal to, or less than or equal to the other operand.
 */
        console.log(8 >= 2); // prints: true
        console.log(3 < 0); // prints: false
        
/*
 * 3. Logical operators: compares its operands and returns a boolean value based on whether the comparison is true
 */
//      || logical OR operator: one operand on either side of the operator must be true to yield true
        true || true // prints: true
        true || false // prints: true
                
//      && logical AND operator: all operands on either side of the operator must be true to yield true
        true && true // prints: true
        true && false // prints: false
 
//      == loosely equal operator: checks whether two operands are equal without regard to datatype
        '1' == 1 // prints: true
        
//      == strictly equal operator: checks whether two operands are equal including datatype
        '1' === 1 // prints: false
        
/* 
 *
 * 4. Unary operators (!, typeOf, -): takes only one operand
 *
 * The logical NOT ! operator converts the operand to a boolean value and then negates it.
 * We can also apply this logic to the loosely equal and strictly equal logical operators.
 */
        var falseBool = !true; // prints: false
        
        if (falseBool !== true){
                console.log(falseBool); // prints: false
}

/* typeof returns a string of the operand's datatype.
 * There are special cases in which certain datatypes cannot rely only on the typeof operator.
 * The typeof operator will return 'object' for an array and null.
 * It will also return 'function' for typeof Date
 */
        var whatType = typeof falseBool; // prints: boolean
        
        var arrayType = [];
        console.log(typeof arrayType); // prints: 'object'
        
// how to check if a datatype is an array when typeof gives an output of 'object':
        Array.isArray(arrayType); // prints: true
        
/* 
 * Placing a negative/minus operator in front of an operand negates that operator.
 * It can also convert a non-number into a number.
 */
        var numPositive = 4;
        var numNegative = -numPositive; // prints: -4
 
        var numberString = "4";
        var number = -numberString; // prints: 4
        
/*
 * 4. Ternary operator (a ? b : c): conditional operator that takes three operands
 *
 * SYNTAX:
 *      condition ? code to execute if true : code to execute if false;
 *
 * Watch out for falsey expressions. If the condition results in null, NaN, 0,
 * the empty string (""), or undefined, the result of the conditional expression will be falsey
 * which will cause the code after the colon to be executed.
 */
        var num1 = 16;
        var num2 = 75;
        var compareNums = num1 > num2 ? console.log('Num1 is bigger') : console.log('Num2 is bigger');
        
// To visualize what is happening in the above example, here's the same code written as an if statement:
        if (num1 > num2) {
                console.log('Num1 is bigger');
        } else {
                console.log('Num2 is bigger');
        };