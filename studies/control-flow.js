/*
 * CONTROL FLOW:
 *
 * To control the flow of our code, we can use conditional statements: if-statements or switch statements.
 * Conditional statements provide the application with instructions based on the true or false outcome
 * of a statement. Once the true or false value, or boolean value, is found, we then must tell the
 * application what to do based on the outcome.
 
 * The application will test the statements from top to bottom to find the first true statement,
 * and executes the code immediately following that statement. The application will
 * not test any statements after finding the first true statement.
 * 
 * Each time a new conditional statement (if-statement or switch statement) is introduced,
 * a new chain of code is created. Each chain or block is evaluated individually, which allows
 * control of the flow of the code.
 *
 * Below are example of these types of conditional statements.
 * 0. If
 * If-statements can stand alone. If an if-statement is followed by another if-statement,
 * the conditions will be evaluated separately as they are two separate blocks of code.
 * If the condition resolves to be truthy, the code following the condition will execute.
 * If the condition resolves to be falsy, the code following the condition will not execute.
 *
 * Syntax:  If (condition is true){
 *              execute this code;
 *          }
 */
var apple = 'red';
 
 if(apple === 'red'){ // if this statement is true
    console.log('The apple is red'); // run this code
 }
/* 1. Else-if
 * Sometimes you may have more than one outcome depending on which statement is true.
 * Although if-statements can stand alone, an else-if-statement must follow an if-statement.
 * Additionally, there is no limit to the amount of else-if-statements that can follow
 * a single if-statement. Else-if statements will always come after the if-statement but
 * before the else-statement if applicable.
 *
 * Syntax:  If (condition is true){
 *              execute this code;
 *          } else if (condition is true){
 *              execute this code;
 *          }
 */
 var gamingConsole = 'PS5';
 
 if(gamingConsole === 'PS5'){
     console.log('Not in inventory')
 } else if (gamingConsole === 'SeriesX'){
     console.log('Not in inventory')
 } else if (gamingConsole === 'Switch'){
     console.log('$299')
 };
 
/* 2. Else
 * If none of the conditionals are true, you can create a default outcome using else.
 * The else-statement is the last part of the if-else chain. If there is no else-if statement,
 * the else-statement can be written directly after the if-statement. If there is an
 * else-if statement, the else-statement must be written as the last and final part of the
 * chain. An else-statement cannot stand alone.
 *
 * Syntax:  If (condition is true){
 *              execute this code;
 *          } else if (condition is true){
 *              execute this code;
 *          } else {
 *              execute this code;
 *          }
 *
 */
 var num = 75;
 
 if(num <= 10){
     console.log('The number is between 1 and 10')
 } else if (num > 10 && num <= 100){
     console.log('The number is between 11 and 100')
 } else {
     console.log('The number is over 100')
 };
 
/*
 * 3. Switch
 * In some cases, it is easier to read the code by using a switch statement.
 * A switch statement evaluates an expression using true or false outcomes of individual cases
 * compared to the same statement. It will return the first case that is true.
 * The default expression can be compared to the else expression in an if-else statement. 
 *Use the switch statement to select one of many code blocks to be executed.
 */
 
 /*The switch statement evaluates an expression, matching the expression's value to a case clause,
 and executes statements associated with that case, as well as statements in cases that follow the matching case.
 */
 
 const expr = "Bananas"
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");



