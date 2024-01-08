//if statement
let sale= true;
if(sale){
  console.log("Time to buy!");
}
//if-else
let sales = true;

sales = false;

if(sales) {
  console.log('Time to buy!');
}
else{
  console.log("Time to wait for a sale.");
}
//conditional operations
let hungerLevel=7;
if(hungerLevel < 7){
  console.log("Time to eat!");
}else{
  console.log("We can eat later!");
}
//Logical Operations
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood=== 'sleepy' || tirednessLevel>8){
  console.log("time to sleep");
}else{
  console.log("not bed time yet");
}
//truthly and falsly
let wordCount = 5;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


/*
  1.If Statement
    We often perform a task based on a condition. For example, if the weather is nice today, then we will 
    go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.

    In programming, we can also perform a task based on a condition using an if statement:

    if (true) {
    console.log('This message will print!'); 
    }
    // Prints: This message will print!

    Notice in the example above, we have an if statement. The if statement is composed of:

    The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, 
    indicated by a set of curly braces {}.
    Inside the parentheses (), a condition is provided that evaluates to true or false.
    If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
    If the condition evaluates to false, the block won’t execute.

  2.If...Else Statements
    In the previous exercise, we used an if statement that checked a condition to decide whether or not to 
    run a block of code. In many cases, we’ll have code we want to run if our condition evaluates to false.

    If we wanted to add some default behavior to the if statement, we can add an else statement to run a 
    block of code when the condition evaluates to false. Take a look at the inclusion of an else statement:

    if (false) {
    console.log('The code in this block will not run.');
    } else {
    console.log('But the code in this block will!');
    }

    // Prints: But the code in this block will!

    An else statement must be paired with an if statement, and together they are referred to as an if...else 
    statement.

    In the example above, the else statement:

    Uses the else keyword following the code block of an if statement.
    Has a code block that is wrapped by a set of curly braces {}.
    The code inside the else statement code block will execute when the if statement’s condition evaluates 
    to false.
    if...else statements allow us to automate solutions to yes-or-no questions, also known as binary 
    decisions.

  3.Comparison Operators
    When writing conditional statements, sometimes we need to use different types of operators to compare 
    values. These operators are called comparison operators.

    Here is a list of some handy comparison operators and their syntax:
        Less than: <
        Greater than: >
        Less than or equal to: <=
        Greater than or equal to: >=
        Is equal to: ===
        Is not equal to: !==
    Comparison operators compare the value on the left with the value on the right. For instance:

    10 < 12 // Evaluates to true

    It can be helpful to think of comparison statements as questions. When the answer is “yes”, 
    the statement evaluates to true, and when the answer is “no”, the statement evaluates to false. 
    The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.

    We can also use comparison operators on different data types like strings:

    'apples' === 'oranges' // false

    In the example above, we’re using the identity operator (===) to check if the string 'apples' is the 
    same as the string 'oranges'. Since the two strings are not the same, the comparison statement 
    evaluates to false.

    All comparison statements evaluate to either true or false and are made up of:

    Two values that will be compared.
    An operator that separates the values and compares them accordingly (>, <, <=,>=,===,!==).

  4.Logical Operators
    Working with conditionals means that we will be using booleans, true or false values. In JavaScript, 
    there are operators that work with boolean values known as logical operators. We can use logical 
    operators to add more sophisticated logic to our conditionals. There are three logical operators:
        the and operator (&&)
        the or operator (||)
        the not operator, otherwise known as the bang operator (!)
    When we use the && operator, we are checking that two things are true:

    if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
    } else {
    console.log('Stop');
    }

    When using the && operator, both conditions must evaluate to true for the entire condition to evaluate 
    to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false and
    the else block will execute.

    If we only care about either condition being true, we can use the || operator:

    if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
    } else {
    console.log('Do some work.');
    }

    When using the || operator, only one of the conditions must evaluate to true for the overall statement 
    to evaluate to true. In the code example above, if either day === 'Saturday' or day === 'Sunday' 
    evaluates to true the if‘s condition will evaluate to true and its code block will execute. 
    If the first condition in an || statement evaluates to true, the second condition won’t even be checked. 
    Only if day === 'Saturday' evaluates to false will day === 'Sunday' be evaluated. The code in the else 
    statement above will execute only if both comparisons evaluate to false.

    The ! not operator reverses, or negates, the value of a boolean:

    let excited = true;
    console.log(!excited); // Prints false

    let sleepy = false;
    console.log(!sleepy); // Prints true

    Essentially, the ! operator will either take a true value and pass back false, or it will take a false 
    value and pass back true.

    Logical operators are often used in conditional statements to add another layer of logic to our code.

  5.Truthy and Falsy
    Let’s consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a 
    condition.

    Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a 
    specific value — you’ll only check to see if the variable has been assigned a value.

    Here’s an example:

    let myVariable = 'I Exist!';

    if (myVariable) {
    console.log(myVariable)
    } else {
    console.log('The variable does not exist.')
    }

    The code block in the if statement will run because myVariable has a truthy value; even though the value 
    of myVariable is not explicitly the value true, when used in a boolean or conditional context, 
    it evaluates to true because it has been assigned a non-falsy value.

    So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values 
    includes:
        0
        Empty strings like "" or ''
        null which represent when there is no value at all
        undefined which represent when a declared variable lacks a value
        NaN, or Not a Number
    Here’s an example with numbers:

    let numberOfApples = 0;

    if (numberOfApples){
    console.log('Let us eat apples!');
    } else {
    console.log('No apples left!');
    }

    // Prints 'No apples left!'

    The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is a falsy value, 
    the code block in the else statement will run.
    truthly means the variable is assigned a value it runs
    falsely means the variable hasn't got any value(0,null,"",undefined(not assigned))
*/