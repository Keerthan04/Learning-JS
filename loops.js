//for loop
for(let i=5;i<=10;i++){
    console.log(i);
  }

//looping through array
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for(let i=0;i<vacationSpots.length;i++)
{
  console.log(`I would love to visit ${vacationSpots[i]}`);
}


/*
  Loops
    A loop is a programming tool that repeats a set of instructions until a specified condition, called a 
    stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time! You’ll 
    hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

    When we need to reuse a task in our code, we often bundle that action in a function. Similarly, 
    when we see that a process has to repeat multiple times in a row, we write a loop. Loops allow us 
    to create efficient code that automates processes to make scalable, manageable programs.

  1.The For Loop
    Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given 
    block of code on its own. One way to give computers these instructions is with a for loop.

    The typical for loop includes an iterator variable that usually appears in all three expressions. 
    The iterator variable is initialized, checked against the stopping condition, and assigned a new value 
    on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

    A for loop contains three expressions separated by ; inside the parentheses:

    an initialization starts the loop and can also be used to declare the iterator variable.
    a stopping condition is the condition that the iterator variable is evaluated against— if the 
    condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
    an iteration statement is used to update the iterator variable on each loop.
    The for loop syntax looks like this:

        for (let counter = 0; counter < 4; counter++) {
        console.log(counter);
        }

    In this example, the output would be the following:

    0
    1
    2
    3

    Let’s break down the example:

    The initialization is let counter = 0, so the loop will start counting at 0.
    The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, 
    counter, is less than 4.
    The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. 
    For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
    The code block is inside of the curly braces, console.log(counter), will execute until the condition 
    evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point 
    that the condition becomes false is sometimes called the stop condition.

  2.Looping in Reverse
    What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, 
    we can make our loop run backward!

    To run a backward for loop, we must:

    Set the iterator variable to the highest desired value in the initialization expression.
    Set the stopping condition for when the iterator variable is less than the desired amount.
    The iterator should decrease in intervals after each iteration.

  3.Looping through Arrays
    for loops are very handy for iterating over data structures. For example, we can use a for loop to 
    perform the same operation on each element on an array. Arrays hold lists of data, like customer names 
    or product information. Imagine we owned a store and wanted to increase the price of every product in 
    our catalog. That could be a lot of repeating code, but by using a for loop to iterate through the 
    array we could accomplish this task easily.

    To loop through each element in an array, a for loop should use the array’s .length property in its 
    condition.

    Check out the example below to see how for loops iterate on arrays:

    const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
    for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
    }

    This example would give you the following output:

    Grizzly Bear
    Sloth
    Sea Lion

    In the loop above, we’ve named our iterator variable i. This is a variable naming convention you’ll 
    see in a lot of loops. When we use i to iterate through arrays we can think of it as being short-hand 
    for the word index. Notice how our stopping condition checks that i is less than animals.length. 
    Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the 
    length of that array minus 1. If we tried to access an element at the index of animals.length we 
    will have gone too far!

    With for loops, it’s easier for us to work with elements in arrays.

*/