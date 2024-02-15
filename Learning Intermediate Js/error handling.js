//constructing error 
console.log(new Error('User missing name'))//the passed thing goes to the message part of the error
//here throwing of error is not done her we create a error object so the error comes in console with the message that we passed but the next line will also print after the complete error

console.log('Will logging the error stop our program from running?');

//throwing an error
throw new Error('Username or password does not match');// throw new error or just throw error

console.log('my name is keerthan');

//try catch block
try{
    throw new Error('this is error and will be caught in the catch');
  }catch(e){
    console.log(e.message);//this prints only the message if just e complete error ka everything
    //log e or e.name(name of error-if custom is just Error) or e.message
  }

//experimenting
function capAllElements(arr) {
    try {
      arr.forEach((el, index, array) => {
        array[index] = el.toUpperCase();
      });
    } catch (err) {
      console.log(err);
    }
    finally{
      console.log('this line is printedd even after error and if no error at last after complete try ka ');
    }
    
  }
  
  capAllElements("Incorrect argument");

/*
  1.Introduction to Error Handling
    There are two categories of programming mistakes: those that don’t prevent our code from running and those that do.

    Sometimes, we’ve written code that successfully returns a value but a different value from what we expected. Our program continues running, and we might not even realize anything went wrong until much later. It’s like making soup and accidentally adding sugar instead of salt. In the end we still have soup, but it might not be soup that we want to eat. We will not be focusing on these mistakes.

    Rather, we’re going to focus on the errors that pop up when we’ve written code that causes our program to stop running, e.g. trying to reassign a const variable. Instead of returning anything, our program will not execute any more code past where the error occurred. For example, what if we tried to move our soup to the table but dropped it because it was too hot? Then our soup-making process is over— there would be no soup.

    We can’t always stop errors before they occur, but we can include a backup plan in our program to anticipate and respond to the errors to ensure that our program continues running. Error handling is the process of programmatically anticipating and addressing errors. In JavaScript, we handle errors using the keywords try and catch. We try to move the soup to the table, making sure there’s someone or something nearby to catch the soup in case we drop it.

  2.Runtime Errors
    Errors contain useful messages that tell us why our program isn’t working or why the error was thrown. When an error is thrown, our program stops running and the console displays the error message in red text like so:


    When we execute code and a line of code throws an error, that error is referred to as a runtime error. In JavaScript, there are built-in error objects that have a name and message property which tell us what went wrong. Examples of built-in runtime errors include:

    ReferenceError: when a variable or function cannot be found.
    TypeError: when a value is not a valid type, see the example below:

    Explain
    const reminder = 'Reduce, Reuse, Recycle';
    reminder = 'Save the world';
    // TypeError: Assignment to constant variable.
    console.log('This will never be printed!');

    In the example above, when we try to reassign a constant variable reminder, the TypeError is thrown. Code that is written after a thrown runtime error will not be evaluated, so the console.log() statement will not be evaluated.

  3.Constructing an Error(diff from throwing an error)
    JavaScript errors are objects that have a name and message property. Previously, we’ve seen how built-in errors alert us about common mistakes in our code. But, what if we need an error message that isn’t covered by the built-in errors? Let’s say we need to inform a user that a string passed in as an argument is too short with a custom message. Such a message isn’t covered by a built-in error, but we could use the Error function to make our own error object with a message that is unique to our program!


    Explain
    console.log(Error('Your password is too weak.'));
    // Prints: Error: Your password is too weak.

    The Error function takes an argument of a string which becomes the value of the error’s message property. In the code snippet above, we used the Error function to create an error object that has the message 'Your password is too weak.'.

    You might also see errors created with the new keyword. Both methods will lead to the same functionality. Take a look:


    Explain
    console.log(new Error('Your password is too weak.'));
    // Prints: Error: Your password is too weak.

    Keep in mind that creating an error is not the same as throwing an error. A thrown error will cause the program to stop running.

  4.The throw Keyword
    Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.

    To throw an error in JavaScript, we use the throw keyword like so:

    throw Error('Something wrong happened');
    // Error: Something wrong happened

    When we use the throw keyword, the error is thrown and code after the throw statement will not execute. Take for example:


    Explain
    throw Error('Something wrong happened');
    // Error: Something wrong happened

    console.log('This will never run');

    After throw Error('Something wrong happened'); is executed and the error object is thrown, the console.log() statement will not run (just like when a built-in JavaScript error was thrown!).
    
  5.The try...catch Statement
    Up to this point, thrown errors have caused our program to stop running. But, we have the ability to anticipate and handle these errors by writing code to address the error and allow our program to continue running.

    In JavaScript, we use try...catch statement to anticipate and handle errors. Take a look at example below:


    Explain
    try {
    throw Error('This error will get caught');
    } catch (e) {
    console.log(e);
    }
    // Prints: This error will get caught

    console.log('The thrown error that was caught in the try...catch statement!');
    // Prints: 'The thrown error that was caught in the try...catch statement!'

    Now, let’s break down what happened in the try...catch statement above:

    We have code that follows try inside curly braces {} known as the try block.
    Inside the try block we insert code that we anticipate might throw an error.
    Since we want to see what happens if an error is thrown in the try block, we throw an error with the message 'This error will get caught'.
    Following the try block is the catch statement which accepts the thrown error from the try block . The e represents the thrown error.
    The curly braces that follow catch(e) is known as the catch block and contains code that executes to handle the error.
    Since the error is caught, our console.log() after the try...catch statement prints 'The thrown error that was caught in the try...catch statement!'.
    Generally speaking, in a try...catch statement, we evaluate code in the try block and if the code throws an error, the code inside the catch block will handle the error for us. The provided example just showcases how a try...catch statement works because we know an error is being thrown.
    
  6.Handling with try...catch
    In the previous exercise we caught an error that we threw, but we can also use a try...catch statement to handle built-in errors that are thrown by the JavaScript engine that is reading and evaluating our code.


    Explain
    const someVar = 'Cannot be reassigned';
    try {
    someVar = 'Still going to try';
    } catch(e) {
    console.log(e);
    }
    // Prints: TypeError: Assignment to constant variable.

    In the example above, we didn’t use the throw keyword to throw a custom error, rather we tried to re-assign a const variable and a TypeError was thrown. Then, in our catch block, we logged the error to the console.

    Using a try...catch statement for built-in JavaScript errors is really beneficial when we need to use data from an external source that’s not written directly in our program.

    Let’s say we expect to grab an array from a database but the information we get back is a string. In our program, we could have a function that only works on arrays. If that function was called with a string instead of an array we would get an error and our program would stop running!

    However, we can use a try...catch statement to handle the thrown error for us which allows our program to continue running and we receive a message knowing what went wrong!

Error Handling Review
Great job with handling errors!

In this lesson we went over:

How mistakes in programming leads to errors.
Why errors are useful for developers.
Errors will prevent a program from executing unless it is handled.
How to create an error using the Error() function.
How to throw an error object using the throw keyword.
How to use the try...catch statement to handle thrown errors.
Evaluating code in a try block to anticipate errors.
Catching the error in a catch block to allow our program to continue running.
Why the try...catch statement would be useful in a program.
*/