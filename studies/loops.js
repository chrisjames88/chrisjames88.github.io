/*
 * LOOPS:
 * Loops are used to iterate over data or repeat the same code n number of times.
 *
 * 0. Explain while, for, and for-in loops
 * WHILE LOOP
 * A while loop executes a block of code as long as the condition is true.
 *
 * Syntax:
 *      while (condition that tells how long to iterate){
 *          code to execute;
 *          how to increment/decrement in the loop;
 *      };
 */
        let count = 3;
        while(count > 0){
            console.log(count);
            count--;
        } //prints: 3 2 1
 
/* FOR LOOP
 * A for loop is similar to a while loop but the starting variable can be declared inside of the loop.
 * This loop is helpful when trying to iterate through a string or an array because
 * we can access the elements by their indexes.
 *
 * 1. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
 * Forward counting loop:
 */     
        for (var i = 1; i <= 5; i++){
            console.log(i); // printst: 1 2 3 4 5
        }
        
// Backward counting loop:
        for (var i = 5; i >= 0; i--){
            console.log(i); // prints: 5 4 3 2 1 0
        }
        
/* 2. Loop over an Array, forwards and backwards
 * We can access an array's index to loop through it.
 *
 * Syntax:
 *      for (starting point; how long to iterate; how to increment/decrement){
 *          code to execute each loop;
 *      }
 */
        var fruits = ['pineapple', 'apple', 'orange', 'grape', 'pear'];
        for (var i = 0; i < fruits.length; i++){
            console.log(fruits[i]); // prints: 'pineapple', 'apple', 'orange', 'grape', 'pear'
        }
// To loop backwards, we'll start at the end of the array using the .length property
        for (var i = fruits.length - 1; i >= 0; i--){
            console.log(fruits[i]); // prints: 'pear', 'grape,' 'orange', 'apple', 'pineapple'
        }
        
/* FOR IN LOOP
 * Because objects don't have an index, we should use a for in loop to access the object's keys and values.
 * The 'var key' in the for in loop iterates over the object's properties.
 *
 * 3. Loop over an Object
 *
 * Syntax:
 *      for (var key in object){
 *          code to execute;
 *      };
 */
        var car = {
            model: '911',
            make: 'Porsche',
            year: '2020'
        };
        
        // We can access the object's keys
        for (var property in car){
            console.log(property); // prints: model, make, year
        }
        
        // We can also access the object's values
        for (var property in car){
            console.log(car[property]); // prints: 911, Porsche, 2020
        }
        
        // Accessing the object's keys and values
        for (var property in car){
            console.log(`${property}: ${car[property]}`);    // prints:model: "911"
                                                                      //make: "Porsche"
                                                                      //year: 2020
        }
        
        
        
        