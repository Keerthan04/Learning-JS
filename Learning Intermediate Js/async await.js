NOTES
//to understand event loop and all use this link
//https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=youtu.be-an asynchronus code goes to the queue and when the call stack(where the things happen) is empty it sends the one in queue and then does it so while it is running all the other things can happen in call stack and then from the queue it is sent back so similarly in setTimeout when called it goes to the webAPI and then it waits for so many econds as mentioned and then once complete always goes to the queue(asynch all goes to queue so not stop) and then once stack free executed so even if 0 seconds it goes to quwue and waits till stack is free and then happens

//three things callbacks,native promises(.then and all) and the Async Await

//what is async,type of writing(function and arrow mai),3 things,await,await operator and importance,multiple awaits,await promise.all

//async-keyword which indicates that the function is asynchronus 
//async await doesnt have extra functionality it just is syntaclly better to use then the .then and all way of dealing with promise returning asynchrnous functions

//ex of the three things shown
const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');
      
// Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8');
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

  //the promisefied function is 
  const promisifiedReadfile = (file, encoding) => 
  new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, text) => {
			if (err) {
				return reject(err.message);
      }
        resolve(text);//if resolved the text read is sent as resolve so the data in the .then will have the texr
      });
});


// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8');
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
  console.log(firstSentence, secondSentence);
}

readFiles();

//with and without async
function withConstructor(num){//without async returning a promise
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    });
  }
  
  withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  });
  
  // Write your code below:
  async function withAsync(num){//async always returns a promise
    if (num === 0){
        return 'zero';
      } else {
        return 'not zero';//shd return in async,it will take it and return as resolved value of promise
      }
  }
  
  withAsync(100)//since returns a promsie we can use this 
    .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
  })

//use of await and async
const brainstormDinner = require('./library.js');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}
nativePromiseDinner();

// async/await version:
async function announceDinner() {
  // Write your code below:
  const whatToMake = await brainstormDinner();//so the resolved value will be taken by await and stored in the what to make,the brainstormDinner is actually a function returning a promise(the resolved of it goes into whatToMake)
  //if the brainstomDinner has priniting and all that happens only the resolved value direct store in variable we can instead of doing all .then and all other stuff 
  console.log(`I'm going to make ${whatToMake} for dinner.`);
}
announceDinner();

//why await 
const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);//once this done the next line is not printed until the promise resolved value is stored in value and once done next if no await direct 3.great.. goes and in value we get object promise
  let value =  await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

//dependent promises made easier with async and await
const makeBeans = async ()=>{//an async arrow function
    const type = await shopForBeans();
    const isSoft = await soakTheBeans(type);
    const dinner = await cookTheBeans(isSoft);
    console.log(dinner);
  };
  makeBeans();

//using trycatch and async await(VVIP)
async function hostDinnerParty(){
    try{
      let awaitfetched = await cookBeanSouffle();
      console.log(`${awaitfetched} is served!`);
    }catch(error){//when a promise is rejected the resolved value wont store and seen as error and comes to catch block and the error will have the rejected value here the dinner is ruined is the rejected value set in the function so that will be in error as await for then we use try catch so the rejected value can be caught and handled
      console.log(error);
      console.log('Ordering a pizza!');
    }
  }
  hostDinnerParty();

  //the cookBeanSouffle function
  let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
      console.log('Fingers crossed... Putting the Bean Souffle in the oven');
      setTimeout(()=>{
        let success = randomSuccess();
        if(success){
          resolve('Bean Souffle');
        } else {
          reject('Dinner is ruined!');//understand that no error is thrown but a promise is rejected so 
        }
      }, 1000);
    });
   };
  //concurrency in multiple independent promises
  async function serveDinner() {
    const vegetablePromise = steamBroccoli();
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans();
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);//see how await is used here
   }
   
   serveDinner();

//await and promise.all() another way of handeling concurrency 
async function serveDinnerAgain(){
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
    
    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
  }//promise.all returns array of resolved values if all are resolved if one rejected then with the rejected of it it rejects
  
  serveDinnerAgain();
/*
  1.Introduction
    Often in web development, we need to handle asynchronous actions— actions we can wait on while moving on to other tasks. We make requests to networks, databases, or any number of similar operations. JavaScript is non-blocking: instead of stopping the execution of code while it waits, JavaScript uses an event-loop which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.

    Originally, JavaScript used callback functions to handle asynchronous actions. The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale. With ES6, JavaScript integrated native promises which allow us to write significantly more readable code. JavaScript is continually improving, and ES8 provides a new syntax for handling our asynchronous action, async...await. The async...await syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.

    The async...await syntax is syntactic sugar— it doesn’t introduce new functionality into the language, but rather introduces a new syntax for using promises and generators. Both of these were already built in to the language. Despite this, async...await powerfully improves the readability and scalability of our code. Let’s learn how to use it!

  2.The async Keyword
  VVIP
  (how it returns-if nothing then promise with resolved as undefined ,if returns non promise then returns that as a resolved value so can use it with the .then if returns a promise then that only it returns )
  //makes the function asynchronus and always returns a promise

    The async keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function.


    Explain
    async function myFunc() {
    // Function body here
    };

    myFunc();

    We’ll be using async function declarations throughout this lesson, but we can also create async function expressions:


    Explain
    const myFunc = async () => {
    // Function body here
    };

    myFunc();

    async functions always return a promise. This means we can use traditional promise syntax, like .then() and .catch with our async functions. An async function will return in one of three ways:

    If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
    If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
    If a promise is returned from the function, it will simply return that promise

    Explain
    async function fivePromise() { 
    return 5;
    }

    fivePromise()
    .then(resolvedValue => {
        console.log(resolvedValue);
    })  // Prints 5

    In the example above, even though we return 5 inside the function body, what’s actually returned when we invoke fivePromise() is a promise with a resolved value of 5.

  3.The await Operator
  (is an operator which returns the resolved value of the function(may be async or not(not because if async just return as a promise or a function returns a promise)) next to it and since it may take time in resolving it halts the async function in which await is)

    In the last exercise, we covered the async keyword. By itself, it doesn’t do much; async functions are almost always used with the additional keyword await inside the function body.

    The await keyword can only be used inside an async function. await is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved.

    In most situations, we’re dealing with promises that were returned from functions. Generally, these functions are through a library, and, in this lesson, we’ll be providing them. We can await the resolution of the promise it returns inside an async function. In the example below, myPromise() is a function that returns a promise which will resolve to the string "I am resolved now!".


    Explain
    async function asyncFuncExample(){
    let resolvedValue = await myPromise();
    console.log(resolvedValue);
    }

    asyncFuncExample(); // Prints: I am resolved now!

    Within our async function, asyncFuncExample(), we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code.

  4.Writing async Functions
  (the await keyword is vvip it make the excevution of function stop at that line so only on resolved next of await works which is vvip or else if no await the promise till resolved wont wait and continues)
    We’ve seen that the await keyword halts the execution of an async function until a promise is no longer pending. Don’t forget the await keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results.

    We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:


    Explain
    let myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Yay, I resolved!')
        }, 1000);
    });
    }

    Now we’ll write two async functions which invoke myPromise():


    Explain
    async function noAwait() {
    let value = myPromise();
    console.log(value);
    }

    async function yesAwait() {
    let value = await myPromise();
    console.log(value);
    }

    noAwait(); // Prints: Promise { <pending> }
    yesAwait(); // Prints: Yay, I resolved!

    In the first async function, noAwait(), we left off the await keyword before myPromise(). In the second, yesAwait(), we included it. The noAwait() function logs Promise { <pending> } to the console. Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed before the promise had resolved.

    Remember that the await operator returns the resolved value of a promise. When used properly in yesAwait(), the variable value was assigned the resolved value of the myPromise() promise, whereas in noAwait(), value was assigned the promise object itself.
  
  5.Handling Dependent Promises(when mostly chaining and all happens )
    The true beauty of async...await is when we have a series of asynchronous actions which depend on one another. For example, we may make a network request based on a query to a database. In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of .then() functions making sure to return correctly each one:


    Explain
    function nativePromiseVersion() {
    returnsFirstPromise()
        .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
        })
    .then((secondValue) => {
        console.log(secondValue);
        });
    }

    Let’s break down what’s happening in the nativePromiseVersion() function:

    Within our function we use two functions which return promises: returnsFirstPromise() and returnsSecondPromise().
    We invoke returnsFirstPromise() and ensure that the first promise resolved by using .then().
    In the callback of our first .then(), we log the resolved value of the first promise, firstValue, and then return returnsSecondPromise(firstValue).
    We use another .then() to print the second promise’s resolved value to the console.
    Here’s how we’d write an async function to accomplish the same thing:


    Explain
    async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
    }

    Let’s break down what’s happening in our asyncAwaitVersion() function:

    We mark our function as async.
    Inside our function, we create a variable firstValue assigned await returnsFirstPromise(). This means firstValue is assigned the resolved value of the awaited promise.
    Next, we log firstValue to the console.
    Then, we create a variable secondValue assigned to await returnsSecondPromise(firstValue). Therefore, secondValue is assigned this promise’s resolved value.
    Finally, we log secondValue to the console.
    Though using the async...await syntax can save us some typing, the length reduction isn’t the main point. Given the two versions of the function, the async...await version more closely resembles synchronous code, which helps developers maintain and debug their code. The async...await syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax

  6.Handling Errors
  (since async returns promise can use catch but since the then removed with the await to catch if any error thrown we use a try catch block)
    When .catch() is used with a long promise chain, there is no indication of where in the chain the error was thrown. This can make debugging challenging.

    With async...await, we use try...catch statements for error handling. By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch both synchronous and asynchronous errors. This makes for easier debugging!


    Explain
    async function usingTryCatch() {
    try {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
    } catch (err) {
    // Catches any errors in the try block
    console.log(err);
    }
    }

    usingTryCatch();

    Remember, since async functions return promises we can still use native promise’s .catch() with an async function


    Explain
    async function usingPromiseCatch() {
    let resolveValue = await asyncFunction('thing that will fail');
    }

    let rejectedPromise = usingPromiseCatch();
    rejectedPromise.catch((rejectValue) => {
    console.log(rejectValue);
    })

    This is sometimes used in the global scope to catch final errors in complex code.

  7.Handling Independent Promises
  (when one not depend on other to maintain concurrency(use then most of the time or else can handle concurrency))

    Remember that await halts the execution of our async function. This allows us to conveniently write synchronous-style code to handle dependent promises. But what if our async function contains multiple promises which are not dependent on the results of one another to execute?

    async function waiting() {
    const firstValue = await firstAsyncThing();
    const secondValue = await secondAsyncThing();
    console.log(firstValue, secondValue);
    }

    async function concurrent() {
    const firstPromise = firstAsyncThing();
    const secondPromise = secondAsyncThing();
    console.log(await firstPromise, await secondPromise);
    }

    In the waiting() function, we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.

    In our concurrent() function, both promises are constructed without using await. We then await each of their resolutions to print them to the console.

    With our concurrent() function both promises’ asynchronous operations can be run simultaneously. If possible, we want to get started on each asynchronous operation as soon as possible! Within our async functions we should still take advantage of concurrency, the ability to perform asynchronous actions at the same time.

    Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual .then() functions and avoid halting our execution with await.

  8.Await Promise.all()
    Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to await a Promise.all().

    We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. This promise will resolve when all of the promises in the argument array have resolved. This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.


    Explain
    async function asyncPromAll() {
    const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
    for (let i = 0; i<resultArray.length; i++){
        console.log(resultArray[i]); 
    }
    }

    In our above example, we await the resolution of a Promise.all(). This Promise.all() was invoked with an argument array containing four promises (returned from required-in functions). Next, we loop through our resultArray, and log each item to the console. The first element in resultArray is the resolved value of the asyncTask1() promise, the second is the value of the asyncTask2() promise, and so on.

    Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. Promise.all() also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason. As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.

Review
Awesome work getting the hang of the async...await syntax! Let’s review what you’ve learned:

async...await is syntactic sugar built on native JavaScript promises and generators.
We declare an async function with the keyword async.
Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
await returns the resolved value of the awaited promise.
We can write multiple await statements to produce code that reads like synchronous code.
We use try...catch statements within our async functions for error handling.
We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.
*/