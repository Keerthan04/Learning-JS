

/*
  1.Debugging Overview
    Any programmer will tell you that it is incredibly common to be making great progress working through a coding problem when all of a sudden an error like this gets thrown at you:


    Explain
    /home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
    "my_name".capitalize();
            ^

    TypeError: "my_name".capitalize is not a function
    ...

    Alternatively, you might have finally finished implementing a complex function only to find it doesn’t work at all as you expected:


    Explain
    console.log('The square root of 4 is ' + squareRoot(4));
    => 'The square root of 4 is 1.87878787'

    If any of these things happen to you, don’t fret! In our article Thinking About Errors Differently in Your Code, you discovered that these experiences are normal for all developers, no matter how experienced they are. A key skill developers possess is knowing how to debug their code when issues occur.

  2.Error Stack Traces
    We’ll start this lesson by taking a closer look at the most straightforward way to know your code isn’t working as expected: errors!

    You might recognize errors as the scary red text that appears on your screen when you try to run broken code. A piece of software, called a compiler, is trying to translate your code so that your computer can understand and run it. However, the compiler is coming across a piece of code that it can’t interpret. As a result, it throws an error back to you to let you know that it has to stop and why.

    This information is logged as an error stack trace — a printed message containing information about where the error occurred, what type of error was thrown, and a description of the error.

  3.Reading Error Stack Traces
    Now that we know what information we can get from an error stack trace, let’s take a look at an example.


    Explain
    /home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
    myVariable;
    ^

    ReferenceError: myVariable is not defined
    ...

    Using this stack trace, let’s answer three questions you should ask yourself every time you want to debug an error:

    In what line did the error occur? You can almost always find this information on the first line of the stack trace in the following format <file path>/<file name>:<line number>. In this example, the location is app.js:1. This means that the error was thrown in the file named app.js on line 1.
    What type of error was thrown? The first word on the fifth line of the stack trace is the type of error that was thrown. In this case, the type of error was ReferenceError. We will discuss this error type in the next exercise.
    What is the error message? The rest of the fifth line after the error type provides an error message, describing what went wrong. In this case, the description is myVariable is not defined.
    You might notice in this example we skipped explaining a few lines in the stack trace and only included the beginning of the stack trace. A large part of debugging errors is recognizing which pieces of information are useful and which ones aren’t.

  4.JavaScript Error Types
    Now that you can identify the type of error from an error stack trace, you might be wondering what the different types of errors mean.

    Here are three common error types:

    SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.

    ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.

    TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.
    There are seven types of built-in JavaScript errors in total. You can find more information about all of them at the MDN JavaScript Error documentation. Whenever you are confronted with an error you can’t comprehend, consulting this documentation is a great place to start.

  5.Debugging Errors
    Here’s a process for efficiently working through your code’s errors one by one:

    Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
    Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
    Fix the bug and re-run your code.
    Repeat steps 1-3 until your code no longer throws any errors.
    While these steps may seem simple, it can be easy to get overwhelmed by errors in practice. Using these steps, you can tackle your errors one at a time and soon will have your code running error-free.
 
  6.Locating Silent Bugs
    Errors thrown by the computer are really useful because they identify the bug type and location for you right away. However, even if your code runs error-free, it is not necessarily bug-free.

    You may find that your code is consistently returning incorrect values without throwing any errors. A lack of thrown errors does not mean your code logic is completely correct.

    An incredibly powerful tool for locating bugs is a method you likely learned very early on in your JavaScript journey: console.log()!

    By adding print statements to our code, we can identify where things have gone wrong.

  7.Debugging with console.log()
    Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

    Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
    After the next piece of logic in your code, add console.log() statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
    Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.

  8.Finding Documentation
    Sometimes once you’ve tracked down a bug, you might still be confused on how to fix it! Whenever you want to know more about how JavaScript works and what it can do, the best place to go is documentation. You can find the JavaScript documentation at the MDN JavaScript web docs.

    The MDN JavaScript web docs are a powerful resource, but they can be overwhelming because they cover so much information. We encourage you to explore the docs, but often the fastest way to access a specific part of the docs you’re interested in is to Google it.

    For example, if we wanted more information on the Number object’s .isNan() method, we could Google “MDN isNan” and then click the link to the MDN page. If we were looking to see a list of all of the String built-in methods, we might Google “MDN String”, click the link to MDN, and then scroll down to the “Methods” section of the documentation.

  9.Stack Overflow
    At this point, you might be thinking to yourself, documentation is good and all, but there’s no way it will solve all of my issues! And we totally agree. All programming languages have difficult problems and strange edge cases that appear unexpectedly and are sometimes impossible to solve alone.

    If you are ever stuck trying to solve a coding problem, we strongly encourage you to Google for a solution. One of the best sites you will see appear in the search results is Stack Overflow.

    Stack Overflow is a question and answer forum where frustrated programmers post issues and other programmers discuss and vote for solutions. Almost always if you have an issue, Stack Overflow has an answer.

    For example, say you are stumped trying to write an alphabetize function. If you search “alphabetize string JavaScript” on Google, this Stack Overflow search result will appear. You can quickly scan through the answers on it to see which ones work for you.

    If you are ever programming and a problem is becoming so insurmountable that you want to quit, Stack Overflow is a great place to go to get unstuck.

Debugging Review
You just learned a lot of techniques for helping you get unstuck in all debugging situations. Congratulations! Let’s synthesize everything you learned into one debugging process.

Is your code throwing errors? If so, read the error stack trace for the type, description, and location of the error. Go to the error’s location and try to fix.
Is your code broken but not throwing errors? Walk through your code using console.log() statements. When unexpected results occur, isolate the bug and try to fix it.
Did you locate the bug using steps 1 and 2, but can’t fix the bug? Consult documentation to make sure you are using all JavaScript functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your own Stack Overflow question if none exist on the topic.
It may take some time and practice, but this is how all developers work through their issues, so don’t give up, and you’ll be an expert in no time.
*/