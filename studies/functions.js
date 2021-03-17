/*
 * FUNCTIONS:
 * Functions are reusable blocks of code.
 *
 * 0. Two Phases to Use a Function:
 * First, we must declare/create the function.
 * Second, we must call or apply the function in order for it to execute.
 *
 * 1. Syntax for a NAMED function:
 *
 *      function name(parameter){
 *          code to execute;
 *      }
 * Syntax for calling a function:
 *      functionName(argument);
 *
 * The argument is the element that is passed in place of the parameter.
 *
 * 2. Assigning a function to a variable:
 * We can use the assignment operator = to point a variable to a function.
 * Then we can call on the function any number of times using the variable name.
 */
        var printHello = function(){
            console.log('Hello');
        }
        
        printHello(); // prints: Hello
/*
 * 3. Function Inputs and Outputs:
 * In the example below, the function has an input of two parameters between the parentheses.
 * You should name the parameters so it's clear what we will be using to call the function.
 * Functions can return one single output. In this case, we've called for it to return the
 * sum of the parameters. If no output is specified, the function's default return is undefined.
 */
        var add = function(num1, num2){
            return num1 + num2;
        }
        
        add(5, 7); // prints: 12

/*4. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 * In the example below, variable someNum is declared outside of the function in the global scope.
 * Because functions can see and modify variables in the global scope, if we call this function,
 * it will reassign someNum to a new value. It will keep reassigning as many times as we call the function.
 */
        var someNum = 82;
        
        var subtract = function (num){
            return someNum -= num;
        }
        
        subtract(4); // prints: 78
        subtract(18); // prints: 60
        subtract(5); // prints: 55
    
/* The inverse is not true. If a variable is declared inside of the function scope,
 * it cannot be accessed in the global scope.
 */
        let puppy = "Cairo";
        
        function spacedPuppy() {
            puppy = 'Cairo';
            return puppy.toUpperCase().split('').join(' '); // prints: C A I R O
        };
        
        console.log(puppy); // prints: Cairo

/* 5. Closures: Functions form closures around the data they house. If an object is returned
 * from the Function and is held in memory somewhere (referenced), that closure stays ALIVE,
 * and data can continue to exist in these closures! (See: our meeting-room app for an example!)
 */
        
        var addTo = function(num1){
            var addNew = function(num2){
                return num1 + num2;
            };
            return addNew;
        };
        
        var addThree = addTo(3); // the number in parentheses will be passed in for num1
        
// Now we can use the functions above to pass in an unlimited amount of numbers.
        console.log(addThree(1)); // prints: 4
        
// We can also create new variable using the same base function.
        var addFive = addTo(5);
        console.log(addFive(7)); // prints: 12
        
// Closures are functions that use preserved data.


/*Hoisting is the process of moving a declaration to the top of its scope-able limits.
*ONLY the declaration will be moved to the zeroth line. Functions are hoisted by name and body and variables
*are only hoisted by name. let and const are technically hoisted but their declarations are not initialized. This
happens once their assignment is evaluated at runtime making them inaccessiable until both the assignment and declaration are
*complete.*/
