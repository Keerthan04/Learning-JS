//use of process and running node(remeber for the terminal to be in working directory)
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

//example of using modules
let Dog=require('./dog.js');
let Cat=require('./cat.js');

let fight = (dog, cat) => {
    if (dog.toothStrength > cat.clawStrength) {
        console.log(`${dog.name} wins!`);
    }
    else if (dog.toothStrength < cat.clawStrength) {
        console.log(`${cat.name} wins!`);
    }
    else {
        console.log(`${dog.name} and ${cat.name} are equally skilled fighters!`);

    }
}

const myDog = new Dog('Rex', Math.random());
const myCat = new Cat('Tabby', Math.random());

fight(myDog, myCat);

//usage of emitter 
let events = require('events');//events is core module

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

let myEmitter=new events.EventEmitter();

myEmitter.on('celebration',listenerCallback);//will listen
myEmitter.emit('celebration','keerthan');//will send info to the on ka function and executed

//user input
let {testNumber} = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};
process.stdin.on('data',playGame);//pass data as emitter ka hai 

//error first callback function
//will have err and data passed if error does something or else normal function ka kam

//readable strems
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});
const printData = (data) => {
  console.log(`Item: ${data}`);
};
myInterface.on('line', printData);

//writable stream
const readline = require('readline');
const fs = require('fs');

const myInterfaces = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});
const fileStream = fs.createWriteStream('shoppingResults.txt');
let transformData = (line) => {
 fileStream.write(`They were out of: ${line}\n`); 
}
myInterfaces.on('line', transformData);

//creating our own server
const http = require('http');
let {requestListener} = require('./callbackFile.js');
const PORT = process.env.PORT || 4001;
const server=http.createServer(requestListener);//expects a call back function
server.listen(PORT);

//the requestlistener is 
const fs = require('fs');

module.exports = {
  requestListener: (req, res) => {
  fs.readFile('./myWebsite.html',  'utf-8', (err, data) => {
    if (err){
      res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`${err}`);
    res.end();
    } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end(); 
    }
  })
}
}

//basic creating server
const http = require('http');

let requestListener = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain' });
  response.write('Hello World!\n');
  response.end();
};

const servers = http.createServer(requestListener);

servers.listen(3000);
/*
  1.Introduction
    For a long time, the browser was the only place JavaScript code could be executed. Web developers had to use a different programming language on the front-end than the back-end. It also meant that, even as JavaScript evolved into a more robust and powerful language, it remained a front-end only language.

    Though multiple attempts to create off-browser JavaScript environments have been attempted, Node.js, invented by Ryan Dahl in 2009, found unprecedented popularity and is currently being used by numerous top-tier companies including Netflix, Uber, Paypal, and eBay. Node.js is a JavaScript runtime, or an environment that allows us to execute JavaScript code outside of the browser. A “runtime” converts code written in a high-level, human-readable, programming language and compiles it down to code the computer can execute.

    Though Node was created with the goal of building web servers and web applications in JavaScript, it can also be used for creating command-line applications or desktop applications. In this lesson, we’ll explore some features of Node so you start to feel comfortable with running JavaScript in the Node environment and gain some familiarity with features unique to Node. For more advanced development, Node can be combined with any number of robust frameworks like the Express.js framework for creating effective web application back-ends.

    There’s more to learn about Node than we could ever fit in one lesson. We’ll try to point to great resources like MDN and the Node.js documentation. Take your time exploring and use the documentation.

    node-v checking node version

  2.The Node REPL
    REPL is an abbreviation for read–eval–print loop. It’s a program that loops, or repeatedly cycles, through three different states: a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, and the print state where the program prints out its evaluation to a console. Then it loops through these states again.

    When you install Node, it comes with a built-in JavaScript REPL. You can access the REPL by typing the command node (with nothing after it) into the terminal and hitting enter. A > character will show up in the terminal indicating the REPL is running and prompting your input. The Node REPL will evaluate your input line by line.

    By default, you indicate the input is ready for eval when you hit enter. If you’d like to type multiple lines and then have them evaluated at once you can type .editor while in the REPL. Once in “editor” mode, you can type control + d when you’re ready for the input to be evaluated. Each session of the REPL has a single shared memory; you can access any variables or functions you define until you exit the REPL.

    A REPL can be extremely useful for performing calculations, learning a language, and developing code. It’s a place where you can explore language features and try things out while receiving immediate feedback. Figuring out how to do this outside of the browser or a website can be really empowering.

    The Node environment contains a number of Node-specific global elements in addition to those built into the JavaScript language. Every Node-specific global property sits inside the the Node global object. This object contains a number of useful properties and methods that are available anywhere in the Node environment.

    Let’s try out the Node REPL. This will be a good way for you to explore the Node global object!

    Experiment on your own within the REPL to get a better sense of it. Here are some suggestions for things to try:

    Access the global object. You can console.log(global) or, since the REPL displays the return of each evaluated line, simply type global and then enter.
    Woah… it looks huge. A lot of that is because of the global.process object. Check out an easier to read list of the properties on the global object with Object.keys(global).
    The global object has a lot of useful properties and methods, and it’s not common to add any to it. However, it is just an object, so we can! Add a property to the global object, eg. global.cat = 'meow!'.
    Now print or return the property you just added:
    > console.log(global.cat)
    'meow!'

    If you’re familiar with running JavaScript on the browser, you’ve likely encountered the Window object. Here’s one major way that Node differs: try to access the Window object (this will throw an error). The Window object is the JavaScript object in the browser that holds the DOM, since we don’t have a DOM here, there’s no Window object.

  3.Running a Program with Node
    Node was designed with server-side web development in mind and has a lot of thoughtful functionality towards that end. At its most simple, however, it provides the ability to run JavaScript programs on our own computers instead of just in the browser’s console or embedded in HTML.

    In this lesson, we’ll explore some of the functionality and properties specific to the Node environment, but first, let’s see how we run a program.

    We’ll need to create a file with a .js extension. We’ll call ours myProgram.js. Next, we’ll open that file with a text editor and add our code:

    // Inside myProgram.js
    console.log('Hello World');

    Our code is complete! Now, we want to execute it. We’ll open our terminal and navigate to the directory that contains myProgram.js. Finally, we’ll type the command node myProgram.js into our terminal.

    $ node myProgram.js

    The results of our program will print to the terminal.

    Hello World

    Let’s write a program and run it in Node.

    a program run in node env by writing 
    node programname.js

  4.Accessing the Process Object
    In computer science, a process is the instance of a computer program that is being executed. You can open Task Manager if you’re on a Windows machine or Activity Monitor from a Mac to see information about the various processes running on your computer right now. Node has a global process object with useful methods and information about the current process.

    The process.env property is an object which stores and controls information about the environment in which the process is currently running. For example, the process.env object contains a PWD property which holds a string with the directory in which the current process is located. It can be useful to have some if/else logic in a program depending on the current environment— a web application in a development phase might perform different tasks than when it’s live to users. We could store this information on the process.env. One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.

    if (process.env.NODE_ENV === 'development'){
    console.log('Testing! Testing! Does everything work?');
    }

    The process.memoryUsage() returns information on the CPU demands of the current process. It returns a property that looks similar to this:

    { rss: 26247168,
    heapTotal: 5767168,
    heapUsed: 3573032,
    external: 8772 }

    Heap can mean different things in different contexts: a heap can refer to a specific data structure, but it can also refer to the a block of computer memory. process.memoryUsage().heapUsed will return a number representing how many bytes of memory the current process is using.

    The process.argv property holds an array of command line values provided when the current process was initiated. The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces.

    node myProgram.js testing several features

    console.log(process.argv[3]); // Prints 'several'

    We’ve only covered a few of the properties of the process object, so make sure to check out the documentation on the process object to learn more about it and explore some of its other methods and properties.

    process is a global object and has many properties
    process.argv-arrays of command line arguments(1st two are node and the file name so always starts from 2 i.e 3rd element of array)
    process.memoryUsed()
    process.env-environment and many more learn from doc

  5.Core Modules and Local Modules(core modules are of node and local is ours use require and call)
    Modularity is a software design technique where one program has distinct parts each providing a single piece of the overall functionality. These separate modules come together to build a cohesive whole. Modularity is essential for creating scalable programs which incorporate libraries and frameworks and separate the program’s concerns into manageable chunks. Essentially, a module is a collection of code located in a file. Instead of having an entire program located in a single file, code is organized into separate files and combined through requiring them where needed using the require() function.

    To save developers from having to reinvent the wheel each time, Node has several modules included within the environment to efficiently perform common tasks. These are known as the core modules. The core modules are defined within Node.js’s source and are located in the lib/ folder. Core modules are required by passing a string with the name of the module into the require() function:

    // Require in the 'events' core module:
    let events = require('events');

    We can use the same require() function to require modules of our own creation. To handle these different tasks, the require() function includes some interesting logic “under the hood.” The require() function will first check to see if its argument is a core module, if not, it will move on to different attempts to locate it. Check out the Node Modules documentation to learn more about how require() works.

    Let’s walk through the process of requiring a local module:

    // dog.js
    module.exports = class Dog {

    constructor(name) {
        this.name = name;
    }

    praise() {
        return `Good dog, ${this.name}!`;
    }
    };

    Above, in the dog.js file, we assign the Dog class as the value of module.exports. Each JavaScript file in the Node environment has a special JavaScript object called module.exports. It holds everything in that file, or module, that’s available to be required into a different file.

    // app.js
    let Dog = require('./dog.js');
    const tadpole = new Dog('Tadpole');
    console.log(tadpole.praise());

    In our app.js file we assign the variable Dog to the module.exports object of our dog.js file by invoking the require() function. Unlike when we require core modules which are required in with the name of the module as a string, local modules are required by passing in the path to the module. The require() function has some other quirks, like assuming file extensions if none are provided; this means we could have written let Dog = require('./dog'); in place of let Dog = require('./dog.js'); in the code above, and the require() function would have still correctly located and required in dog.js.

  6.Node Package Manager
    In addition to local modules and core modules, we can take advantage of third-party modules. Using libraries created by other developers is an essential aspect of production; we don’t have to reinvent the wheel each time we want to include new functionality into our applications. NPM, which stands for Node Package Manager, is an online collection, or registry, of software. Developers can share code they’ve written to the registry or download code provided by other developers.

    When we download Node, the npm command-line tool is downloaded as well, which enables us to interact with the registry via our terminal. There are hundreds of thousands of packages of re-usable code in the NPM registry including powerful and popular frameworks like express and react. You can explore the collection at the npm website.

    One package we like is nodemon. It’s a powerful tool for development in Node that watches all the files in a project you’re working on, and automatically restarts your application when any of them change.

  7.Event-Driven Architecture
    Node is often described as having event-driven architecture. Let’s explore what that means.

    In traditional imperative programming, we give the computer a series of instructions to execute in a pre-defined order. In contrast, when we write web applications, we often need to write logic to handle situations without knowing exactly when they’ll occur. For example, when programming a website, we might provide functionality for a click event without knowing when a user will trigger it. When Node was created, it applied this same concept of event-driven principles to the back-end environment.

    Node provides an EventEmitter class which we can access by requiring in the events core module:

    // Require in the 'events' core module
    let events = require('events');

    // Create an instance of the EventEmitter class
    let myEmitter = new events.EventEmitter();

    Each event emitter instance has an .on() method which assigns a listener callback function to a named event. The .on() method takes as its first argument the name of the event as a string and, as its second argument, the listener callback function.

    Each event emitter instance also has an .emit() method which announces a named event has occurred. The .emit() method takes as its first argument the name of the event as a string and, as its second argument, the data that should be passed into the listener callback function.

    let newUserListener = (data) => {
    console.log(`We have a new user: ${data}.`);
    };

    // Assign the newUserListener function as the listener callback for 'new user' events
    myEmitter.on('new user', newUserListener)

    // Emit a 'new user' event
    myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'

    Let’s create an event emitter!

  8.Asynchronous JavaScript with Node.js
    In server-side development, we often perform time-consuming tasks such as reading files or querying a database. Instead of halting the execution of our code to await these operations or using multiple threads like other back end environments, Node was designed to use an event loop like the one used in browser-based JavaScript execution. The event-loop enables asynchronous actions to be handled in a non-blocking way.

    Node provides a number of APIs for performing asynchronous tasks which expect callback functions to be passed in as arguments. Under the hood, these APIs trigger the subscription to and emitting of events to signal the completion of the operation. When the operation completes, the callback function is added to a queue, or line, of tasks waiting for their turn to be executed. When the current stack, or list, or synchronous tasks finish executing, the operations on the queue will be performed.

    This means if synchronous tasks never end, operations waiting in the event-queue would never have the chance to run. Take a look at the following example code using the asynchronous Node setTimeout() API which asynchronously executes a provided callback function after a given delay:

    let keepGoing = true;

    let callback = () => {
    keepGoing = false;
    };

    setTimeout(callback, 1000); // Run callback after 1000ms

    while(keepGoing === true) {
    console.log(`This is the song that never ends. Yes, it just goes on and on my friends. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...`)
    };

    This while-loop will continue forever! Even though the callback changing the keepGoing variable to false is added to the event queue after 1 second, it will never have a chance to run— the synchronous code from the loop will always fill the stack! If we wanted to avoid the infinite loop, we could replace the while-loop with an asynchronous function— for example, the Node setInterval() API.

    Note: The modern way of handling asynchronous tasks is through JavaScript Promises (developers also favor the newer async...await syntax). If you’re not familiar with these topics, check out our lessons on them. Newer versions of Node (v8.0.0 and later) provide a collection of the traditional Node asynchronous APIs formatted for promises instead of callbacks. This can be found on util.promisify. Many contemporary 3rd party libraries also favor promise-based patterns over traditional callbacks.

  9.User Input/Output
    If you’ve worked with JavaScript before, you’re likely familiar with the concept of input/output even if you haven’t heard it called that. At its most abstract, output is any data or feedback that a computer provides (like to a human user), while input is data provided to the computer. When we use console.log() we prompt the computer to output information to the console. In the Node environment, the console is the terminal, and the console.log() method is a “thin wrapper” on the .stdout.write() method of the process object. stdout stands for standard output.

    In Node, we can also receive input from a user through the terminal using the stdin.on() method on the process object:

    process.stdin.on('data', (userInput) => {
    let input = userInput.toString()
    console.log(input)
    });

    Here, we were able to use .on() because under the hood process.stdin is an instance of EventEmitter. When a user enters text into the terminal and hits enter, a 'data' event will be fired and our anonymous listener callback will be invoked. The userInput we receive is an instance of the Node Buffer class, so we convert it to a string before printing.

  10.Errors
    The Node environment has all the standard JavaScript errors such as EvalError, SyntaxError, RangeError, ReferenceError, TypeError, and URIError as well as the JavaScript Error class for creating new error instances. Within our own code, we can generate errors and throw them, and, with synchronous code in Node, we can use error handling techniques such as try...catch statements.

    Many asynchronous Node APIs use error-first callback functions: callback functions which have an error as the first expected argument and the data as the second argument. If the asynchronous task results in an error, it will be passed in as the first argument to the callback function. If no error was thrown, the first argument will be undefined.

    const errorFirstCallback = (err, data)  => {
    if (err) {
        console.log(`There WAS an error: ${err}`);
    } else {
        // err was falsy
        console.log(`There was NO error. Event data: ${data}`);
    }
    }

  11.Filesystem
    All of the data on a computer is organized and accessed through a filesystem. When running JavaScript code on a browser, it’s important for a script to have only limited access to a user’s filesystem. This technique of isolating some applications from others is known as sandboxing. Sandboxing protects users from malicious programs and invasions of privacy.

    In the back-end, however, less restricted interaction with the filesystem is essential. The Node fs core module is an API for interacting with the file system. It was modeled after the POSIX standard for interacting with the filesystem.

    Each method available through the fs module has a synchronous version and an asynchronous version. One method available on the fs core module is the .readFile() method which reads data from a provided file:

    const fs = require('fs');

    let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
    };

    fs.readFile('./file.txt', 'utf-8', readDataCallback);

    Let’s walk through the example above:

    We required in the fs core module.
    We define an error-first callback function which expects an error to be passed as the first argument and data as the second. If the error is present, the function will print Something went wrong: ${err}, otherwise, it will print Provided file contained: ${data}.
    We invoked the .readFile() method with three arguments:
    The first argument is a string that contains a path to the file file.txt.
    The second argument is a string specifying the file’s character encoding (usually ‘utf-8’ for text files).
    The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete. Node will pass the contents of file.txt into the provided callback as its second argument.

  12.Readable Streams
    In the previous exercise, we practiced reading the contents of entire files into our JavaScript programs. In more realistic scenarios, data isn’t processed all at once but rather sequentially, piece by piece, in what is known as a stream. Streaming data is often preferable since you don’t need enough RAM to process all the data at once nor do you need to have all the data on hand to begin processing it.

    One of the simplest uses of streams is reading and writing to files line-by-line. To read files line-by-line, we can use the .createInterface() method from the readline core module. .createInterface() returns an EventEmitter set up to emit 'line' events:


    Explain
    const readline = require('readline');
    const fs = require('fs');

    const myInterface = readline.createInterface({
    input: fs.createReadStream('text.txt')
    });

    myInterface.on('line', (fileLine) => {
    console.log(`The line read: ${fileLine}`);
    });

    Let’s walk through the above code:

    We require in the readline and fs core modules.
    We assign to myInterface the returned value from invoking readline.createInterface() with an object containing our designated input.
    We set our input to fs.createReadStream('text.txt') which will create a stream from the text.txt file.
    Next we assign a listener callback to execute when line events are emitted. A 'line' event will be emitted after each line from the file is read.
    Our listener callback will log to the console 'The line read: [fileLine]', where [fileLine] is the line just read.
    Let’s practice making a readable stream.

  13.Writable Streams
    In the previous exercise, we were reading data from a stream, but we can also write to streams! We can create a writeable stream to a file using the fs.createWriteStream() method:

    const fs = require('fs')

    const fileStream = fs.createWriteStream('output.txt');

    fileStream.write('This is the first line!'); 
    fileStream.write('This is the second line!');
    fileStream.end();

    In the code above, we set the output file as output.txt. Then we .write() lines to the file. Unlike a readable stream, which ends when it has no more data to read, a writable stream could remain open indefinitely. We can indicate the end of a writable stream with the .end() method.

    Let’s combine our knowledge of readable and writable streams to create a program which reads from one text file and then writes to another.

  14.Create an HTTP Server
    Node was designed with back end development needs as a top priority. One of these needs is the ability to create web servers, computer processes that listen for requests from clients and return responses. A Node core module designed to meet these needs is the http module. This module contains functions which simplify interacting with HTTP and streamline receiving and responding to requests.

    The http.createServer() method returns an instance of an http.server. An http.server has a method .listen() which causes the server to “listen” for incoming connections. When we run http.createServer() we pass in a custom callback function (often referred to as the requestListener). This callback function will be triggered once the server is listening and receives a request.

    Let’s break down how the requestListener callback function works:

    The function expects two arguments: a request object and a response object.
    Each time a request to the server is made, Node will invoke the provided requestListener callback function, passing in the request and response objects of the incoming request.
    Request and response objects come with a number of properties and methods of their own, and within the requestListener function, we can access information about the request via the request object passed in.
    The requestListener is responsible for setting the response header and body.
    The requestListener must signal that the interaction is complete by calling the response.end() method.

    const http = require('http');

    let requestListener = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain' });
    response.write('Hello World!\n');
    response.end();
    };

    const server = http.createServer(requestListener);

    server.listen(3000);

    Let’s walk through the above code:

    We required in the http core module.
    We created a server variable assigned to the return value of the http.createServer() method.
    We invoked http.createServer() with our requestListener callback. This is similar to running the .on() of an EventEmitter: the requestListener will execute whenever an HTTP request is sent to the server on the correct port.
    Within the requestListener callback, we make changes to the response object, response, so that it can send the appropriate information to the client sending the request. The status code 200 means that no errors were encountered. The header communicates that the file type is text, rather than something like audio or compressed data.
    The last line starts the server with the port 3000. Every server on a given machine specifies a unique port so that traffic can be correctly routed.
    You could run the above code on your local machine, and access it by visiting http://localhost:3000/ from your browser. “localhost” is used to refer to the same computer that’s running the current Node process.

    In our example web server, we showed you a handful of the methods available on response objects. Be sure to check out the documentation to learn other methods and properties available on response and request objects.

Review
Awesome work! You’ve learned a lot about Node.js including:

Node.js is a JavaScript runtime, an environment that allows us to execute our JavaScript code by converting it into something a computer can understand.
REPLs are processes that read, evaluate, print, and repeat (loop), and Node.js comes with its own REPL we can access in our terminal with the node command.
We run JavaScript programs with Node in the terminal by typing node followed by the file name (if we’re in the same directory) or the absolute path of the file.
Code can be organized into separate files, modules, and combined through requiring them where needed using the require() function.
In addition to core modules, modules included within the environment to efficiently perform common tasks, we can also create our own modules using module.exports and the require() function.
We can access NPM, a registry of hundreds of thousands of packages of re-usable code from other developers, directly through our terminal.
Node has an event-driven architecture.
We can make our own instances of the EventEmitter class and we can subscribe to listen for named events with the .on() method and emit events with the .emit() method.
Node uses an event loop which enables asynchronous actions to be handled in a non-blocking way by adding callback functions to a queue of tasks to be executed when the callstack is empty.
In order to handle errors during asynchronous operations, provided callback functions are expected to have an error as their first parameter.
Node allows for both output, data/feedback to a user provided by a computer, and input data/feedback to the computer provided by the user.
The Node fs core module is an API for interacting with the file system.
Streams allow us to read or write data piece by piece instead of all at once.
The Node http core module allows for easy creation of web servers, computer processes that listen for requests from clients and return responses.
Woah, that was a lot… And there’s even more to Node that we didn’t cover in this lesson, but don’t panic! Learning Node isn’t about memorizing every aspect of the environment. The best way to get comfortable with Node is just to practice making things in it. Your imagination is the limit! If you haven’t already, download Node on your local machine. You can start by recreating some of the programs you built in this lesson— put your own spin on a guessing game, for example. If you’re eager to build web application back-ends, we recommend you start learning the awesome Express.js web framework.
*/