//functions
function getReminder(){
  console.log("Water the plants");
};
function greetInSpanish(){
  console.log("Buenas tardes");
};
getReminder();
greetInSpanish();

//function call
function sayThanks(){
  console.log("Thank you for your purchase! We appreciate your business.");
};
sayThanks();

//parameters and argu pass
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
};
sayThanks('keerthan');
let myname='jaya';
sayThanks(myname);

//Default Parameters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
};
makeShoppingList('a','b','c');//when parameters passed,parameters are printed
makeShoppingList();//if no parameters then default parameters are printed;

//return statement
function monitorCount(rows,columns){
  return rows*columns;
};
const numOfMonitors=monitorCount(4,5);
console.log(`the number of monitors is: ${numOfMonitors}`);

//Helper Functions
function monitorCount(rows, columns) {
  return rows * columns;
};
function costOfMonitors(rows,columns){
  return monitorCount(rows,columns)*200;
};
const totalCost=costOfMonitors(5,4);
console.log(totalCost);

//function expressions
const plantNeedsWater=function(day){//const used mostly(industrial practice)
  if(day=== 'Wednesday'){
    return true;
  }
  else{
    return false;
  }
};
console.log(plantNeedsWater('Tuesday'));

//arrow functions
const plantNeedsWaters = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
//consise arrow function
const plantNeedsWaterss = day => day === 'Wednesday' ? true : false;//one parameter and no return 

/*
  What are Functions?
    When first learning how to calculate the area of a rectangle, there’s a sequence of steps to 
    calculate the correct answer:

    Measure the width of the rectangle.
    Measure the height of the rectangle.
    Multiply the width and height of the rectangle.
    With practice, you can calculate the area of the rectangle without being instructed with these three steps every time.

    We can calculate the area of one rectangle with the following code:

    const width = 10;
    const height = 6;
    const area =  width * height;
    console.log(area); // Output: 60

    Imagine being asked to calculate the area of three different rectangles:

    // Area of the first rectangle
    const width1 = 10;
    const height1 = 6;
    const area1 =  width1 * height1;

    // Area of the second rectangle
    const width2 = 4;
    const height2 = 9;
    const area2 =  width2 * height2;

    // Area of the third rectangle
    const width3 = 10;
    const height3 = 10;
    const area3 =  width3 * height3;

    In programming, we often use code to perform a specific task multiple times. Instead of rewriting the 
    same code, we can group a block of code together and associate it with one task, then we can reuse 
    that block of code whenever we need to perform the task again. We achieve this by creating a function. 
    A function is a reusable block of code that groups together a sequence of statements to perform a 
    specific task.
  
  1.Function Declarations
    In JavaScript, there are many ways to create a function. One way to create a function is by using a 
    function declaration. Just like how a variable declaration binds a value to a variable name, a 
    function declaration binds a function to a name, or an identifier. Take a look at the anatomy of a 
    function declaration below:

    A function declaration consists of:

    The function keyword.
    The name of the function, or its identifier, followed by parentheses.
    A function body, or the block of statements required to perform a specific task, enclosed in the 
    function’s curly brackets, { }.
    A function declaration is a function that is bound to an identifier, or name. In the next exercise 
    we’ll go over how to run the code inside the function body.

    We should also be aware of the hoisting feature in JavaScript which allows access to function 
    declarations before they’re defined.

    Take a look at example of hoisting:

    greetWorld(); // Output: Hello, World!

    function greetWorld() {
      console.log('Hello, World!');
    }

    Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! 
    Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.

  2.Calling a Function
    As we saw in previous exercises, a function declaration binds a function to an identifier.

    However, a function declaration does not ask the code inside the function body to run, it just 
    declares the existence of the function. The code inside a function body runs, or executes, only when 
    the function is called.

    To call a function in your code, you type the function name followed by parentheses.

    Diagram showing the syntax of invoking a function
    This function call executes the function body, or all of the statements between the curly braces 
    in the function declaration.

    We can call the same function as many times as needed.

  3.Parameters and Arguments
    So far, the functions we’ve created execute a task without an input. However, some functions can take 
    inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. 
    Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters 
    as placeholders for information that will be passed to the function when it is called.

    Let’s observe how to specify parameters in our function declaration:

    JavaScript syntax for declaring a function with parameters
    In the diagram above, calculateArea(), computes the area of a rectangle, based on two inputs, 
    width and height. The parameters are specified between the parenthesis as width and height, and 
    inside the function body, they act just like regular variables. width and height act as placeholders 
    for values that will be multiplied together.

    When calling a function that has parameters, we specify the values in the parentheses that follow the 
    function name. The values that are passed to the function when it is called are called arguments. 
    Arguments can be passed to the function as values or variables.

    JavaScript syntax for invoking a function with arguments as values
    In the function call above, the number 10 is passed as the width and 6 is passed as height. Notice 
    that the order in which arguments are passed and assigned follows the order that the parameters are 
    declared.

    JavaScript syntax for invoking a function with arguments as variables
    The variables rectWidth and rectHeight are initialized with the values for the height and width of a 
    rectangle before being used in the function call.

    By using parameters, calculateArea() can be reused to compute the area of any rectangle!

  4.Default Parameters
    One of the features added in ES6 is the ability to use default parameters. Default parameters allow 
    parameters to have a predetermined value in case there is no argument passed into the function or 
    if the argument is undefined when called.

    Take a look at the code snippet below that uses a default parameter:

    function greeting (name = 'stranger') {
      console.log(`Hello, ${name}!`)
    }

    greeting('Nick') // Output: Hello, Nick!
    greeting() // Output: Hello, stranger!

    In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. 
    This is useful to have in case we ever want to include a non-personalized default greeting!

    When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will 
    override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

    When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 
    'Hello, stranger!' is logged to the console.

    By using a default parameter, we account for situations when an argument isn’t passed into a function 
    that is expecting an argument.

  5.Return
    When a function is called, the computer will run through the function’s code and evaluate the result. 
    By default, the resulting value is undefined.

    function rectangleArea(width, height) {
      let area = width * height;
    }
    console.log(rectangleArea(5, 7)) // Prints undefined

    In the code example, we defined our function to calculate the area of a width and height parameter. 
    Then rectangleArea() is invoked with the arguments 5 and 7. But when we went to print the results 
    we got undefined. Did we write our function wrong? No! In fact, the function worked fine, and the 
    computer did calculate the area as 35, but we didn’t capture it. So how can we do that? With the keyword 
    return!

    using return keyword in a function
    To pass back information from the function call, we use a return statement. To create a return 
    statement, we use the return keyword followed by the value that we wish to return. Like we saw above, 
    if the value is omitted, undefined is returned instead.

    When a return statement is used in a function body, the execution of the function is stopped and the
    code that follows it will not be executed. Look at the example below:

    function rectangleArea(width, height) {
      if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
      }
      return width * height;
    }

    If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive 
    integers to calculate area!'. The second return statement width * height will not run.

    The return keyword is powerful because it allows functions to produce an output. We can then save the 
    output to a variable for later use.

  6.Helper Functions
    We can also use the return value of a function inside another function. These functions being called 
    within another function are often referred to as helper functions. Since each function is carrying out 
    a specific task, it makes our code easier to read and debug if necessary.

    If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could
    write two functions like:

    function multiplyByNineFifths(number) {
      return number * (9/5);
    };

    function getFahrenheit(celsius) {
      return multiplyByNineFifths(celsius) + 32;
    };

    getFahrenheit(15); // Returns 59

    In the example above:

    getFahrenheit() is called and 15 is passed as an argument.
    The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
    multiplyByNineFifths() takes the argument of 15 for the number parameter.
    The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
    27 is returned back to the function call in getFahrenheit().
    getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
    Finally, 59 is returned back to the function call getFahrenheit(15).
    We can use functions to section off small bits of logic or tasks, then use them when we need to. 
    Writing helper functions can help take large and difficult tasks and break them into smaller and more 
    manageable tasks.

  7.Function Expressions
    Another way to define a function is to use a function expression. To define a function inside an 
    expression, we can use the function keyword. In a function expression, the function name is usually 
    omitted. A function with no name is called an anonymous function. A function expression is often stored 
    in a variable in order to refer to it.

    Consider the following function expression:
      const addfun = function(height,width){
        let area=width*height;
        return area;
      }
      addfun(5,10);//calling
    Declare a variable to make the variable’s name be the name, or identifier, of your function. 
    Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

    Assign as that variable’s value an anonymous function created by using the function keyword followed 
    by a set of parentheses with possible parameters. Then a set of curly braces that contain the 
    function body.

    To invoke a function expression, write the name of the variable in which the function is stored 
    followed by parentheses enclosing any arguments being passed into the function.

    variableName(argument1, argument2)

    Unlike function declarations, function expressions are not hoisted so they cannot be called before 
    they are defined.

  8.Arrow Functions
    ES6 introduced arrow function syntax, a shorter way to write functions by using the special 
    “fat arrow” () => notation.

    Arrow functions remove the need to type out the keyword function every time you need to create a 
    function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points 
    to the function body surrounded in { } like this:

    const rectangleArea = (width, height) => {
      let area = width * height;
      return area;
    };

    It’s important to be familiar with the multiple ways of writing functions because you will come across 
    each of these when reading other JavaScript code.

  9.Concise Body Arrow Functions
    JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the 
    function is known as concise body. We’ll explore a few of these techniques below:

      const a = () => {};
      const b = weight => {};
      const c = (weight,height) => {};

    Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. 
    However, if a function takes zero or multiple parameters, parentheses are required.

    showcasing how arrow functions parameters differ for different amounts of parameters
    A function body composed of a single-line block does not need curly braces. Without the curly braces, 
    whatever that line evaluates will be automatically returned. The contents of the block should immediately
    follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

    comparing single line and multiline arrow functions
    So if we have a function:

    const squareNum = (num) => {
      return num * num;
    };

    We can refactor the function to:

    const squareNum = num => num * num;

    Notice the following changes:

    The parentheses around num have been removed, since it has a single parameter.
    The curly braces { } have been removed since the function consists of a single-line block.
    The return keyword has been removed since the function consists of a single-line block.
*/