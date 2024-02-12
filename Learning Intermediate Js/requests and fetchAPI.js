//diagrams of all this check in images

VVIP
//since the response.json() is another async returning a promise we return it and then use  another .then() as chaining of promises was there so the error handler in first then is if any response got rejected and similary in async we just to another await for that repsonse.json() and do the stuff and since func async to handle any errors that is rejected or anything we use a try catch(whenever rejected the rejected value stored in the rejcted goes to catch in async function and handeled there and the thrown error also handeled there)

/*
  1.Introduction to Requests with ES6
    Have you ever wondered what happens after you click a “Submit” button on a web page? For instance, if you are submitting information, where does the information go? How is the information processed? The answer to the previous questions revolves around HTTP requests.

    There are many types of HTTP requests. The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE. In this lesson, we’ll cover GET and POST requests.

    With a GET request, we’re retrieving, or getting, information from some source (usually a website). For a POST request, we’re posting information to a source that will process the information and send it back.

    JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

    Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We will go into event loops in more detail in the Concurrency Model and Event Loop in JavaScript article.

    To make asynchronous event handling easier, promises were introduced in ES6 JavaScript.

    In this lesson, we will explain how to use fetch() and promises to handle requests. Then, we will simplify requests using async and await.

  2.Intro to GET Requests using Fetch
  //fetch returns a promise  that resolves to the Response object representing the response of the request made we handle it with .then() and use response.ok if ok then return the response.json() (calls the next .then)handled in next then else throw error handled in the rejected part of this .then()

    The first type of requests we’re going to tackle is GET requests using fetch().

    The fetch() function:

    Creates a request object that contains relevant information that an API needs.
    Sends that request object to the API endpoint provided.
    Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.
    Let’s walk through the boilerplate code to the right for using fetch() to create a GET request step by step.

    First, call the fetch() function and pass it a URL as a string for the first argument, determining the endpoint of the request.

    fetch('https://api-to-call.com/endpoint')

    The.then() method is chained at the end of the fetch() function and in its first argument, the response of the GET request is passed to the callback arrow function. The .then() method will fire only after the promise status of fetch() has been resolved.

    Inside the callback function, the ok property of the response object returns a Boolean value. If there are no errors, response.ok will be true and the code will return response.json().

    If response.ok is a falsy value, our code will throw an error.

    throw new Error('Request failed!');

    A second argument passed to .then() will be another arrow function that will be triggered when the promise is rejected. It takes a single parameter, networkError. This object logs the networkError if we could not reach the endpoint at all (e.g., the server is down).

    A second .then() method will run after the previous .then() method has finished running without error. It takes jsonResponse, which contains the returned response.json() object from the previous .then() method, as its parameter and can now be handled, however we may choose.

  2.Making a GET Request
    In the previous exercise, we went over the boilerplate code for a GET request using fetch() and .then(). In this exercise, we’re going to apply that code to access the Datamuse API and render the fetched information in the browser.

    The Datamuse API is a word-finding query engine for developers. It can be used in apps to find words that match a given set of constraints that are likely in a given context.

    If the request is successful, we’ll get back an array of words that sound like the word we typed into the input field.

    We may get some errors as we complete each step. This is because sometimes we’ve split a single step into one or more steps to make it easier to follow. By the end, we should be getting no errors.

    ex
    fetch(endpoint, {cache: 'no-cache'}).then(response => {
        if (response.ok) {
        return response.json();//calls the next .then() 
        }
        throw new Error('Request failed!');//if this then wont call the next .then()
        }, networkError => {
            console.log(networkError.message)
        })
        .then()
    }

  3.Handling a GET Request
    Great job making it this far!

    In the previous exercise, we called the fetch() function to make a GET request to the Datamuse API endpoint. Then, you chained a .then() method and passed two callback functions as arguments — one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.

    In this exercise, we will chain another .then() method, which will allow us to take the information that was returned with the promise and manipulate the webpage! Note that if there is an error returned in the first .then() method, the second .then() method will not execute.

    ex: 
    const getSuggestions = () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${wordQuery}`;
    
    fetch(endpoint, {cache: 'no-cache'}).then(response => {
        if (response.ok) {
        return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        // renderRawResponse(jsonResponse);
        renderResponse(jsonResponse);
    })
    }
  4.Intro to POST Requests using Fetch
    //a normal fetch call but with url a second argument where a object is passed with the method as post and the body as the to be set and send gives a response handled with .then( if ok then return i.e call the next .then) if not error throw the response of fetch is depending on the backend how it sends data for that api endpoint post request

    In the previous exercise, we successfully wrote a GET request using the fetch API and handled Promises to get word suggestions from Datamuse. Give yourself a pat on the back (or two to treat yourself)!

    Now, we’re going to learn how to use fetch() to construct POST requests!

    Take a look at the diagram to the right. It has the boilerplate code for a POST request using fetch().

    Notice that the fetch() call takes two arguments: an endpoint and an object that contains information needed for the POST request.

    The object passed to the fetch() function as its second argument contains two properties: method, with a value of 'POST', and body, with a value of JSON.stringify({id: '200'});. This second argument determines that this request is a POST request and what information will be sent to the API.

    A successful POST request will return a response body, which will vary depending on how the API is set up.

    The rest of the request is identical to the GET request. A .then() method is chained to the fetch() function to check and return the response as well as throw an exception when a network error is encountered. A second .then() method is added on so that we can use the response however we may choose.

  5.Making a POST Request
    In the previous exercise, we walked through the boilerplate code for making a POST request using fetch() and .then(). In this exercise, we’re going to use that boilerplate code to shorten a URL using the Rebrandly URL Shortener API.

    We will need a Rebrandly API key. To do this, read through the Rebrandly sign up guide to set up your API.

    ex of a post request
    const shortenUrl = () => {
        const urlToShorten = inputField.value;
        const data = JSON.stringify({ destination: urlToShorten });
        fetch(url, {//contents of req object that is sent
            method: 'POST',
            headers: {
            'Content-type': 'application/json',
            'apikey': apiKey
            },
            body: data
        })
    };
  
  6.Handling a POST Request
    In the previous exercise, we set up the POST request by providing the endpoint and the object containing all the necessary information. In this exercise, we’ll handle the response.

    The request returns a Promise which will either be resolved or rejected. If the promise resolves, we can check and return that response. We will chain another .then() method and handle the returned JSON object and display the information to our webpage.

    Let’s implement this knowledge into our code!
    ex
    const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({ destination: urlToShorten });

    fetch(url, {
        method: "POST",
        headers: {
        "Content-type": "application/json",
        apikey: apiKey,
        },
        body: data,
    }).then((response) => {
        if (response.ok) {
        return response.json();
        }
        throw new Error('Request failed!');
    },networkError=>{
        console.log(networkError.message);
    }).then(jsonResponse =>{
        renderResponse(jsonResponse);
    })
    };

  7.Intro to async GET Requests
    In the following exercises, we’re going to take what we’ve learned about chaining Promises and make it simpler using functionality introduced in ES8: async and await. You read that right, you did the hard part already. Now it’s time to make it easier.

    The structure for this request will be slightly different. We will use the new keywords async and await, as well as the try and catch statements.

    Take a look at the diagram on the right.

    Here are some key points to keep in mind as we walk through the code:

    The async keyword is used to declare an async function that returns a promise.
    The await keyword can only be used within an async function. await suspends the program while waiting for a promise to resolve.
    In a try...catch statement, code in the try block will be run and in the event of an exception, the code in the catch statement will run.

    ex of async fetch
    const getSuggestions = async () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try {
        const response = await fetch(endpoint, {cache: 'no-cache'});
        if(response.ok){
        const jsonResponse = await response.json();
        //the response.json() is a async and returns a promise so await for that
        renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
    }

  8.Intro to async POST Requests
    Now that you’ve made an async GET request, let’s start getting familiar with the async POST request.

    As we’ve seen before, a POST request requires more information. Take a look at the diagram to the right.

    We still have the same structure of using try and catch as the async GET request we just learned about. But, in the fetch() call, we now have to include an additional argument that contains more information like method and body.

    The method property value is set to 'POST' to specify the type of request we are making. Then we have to include a body property with the value of JSON.stringify({id: 200}).

  9.Making an async POST Request
    Since we’ve reviewed the boilerplate code for an async POST request, the next step is to incorporate that logic into making a real request.

    In this exercise, we’ll need to retrieve our Rebrandly API key to access the Rebrandly API.

    We will then pass in the endpoint and the request object into the fetch() method to make our POST request.

    ex
    const shortenUrl = async () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({ destination: urlToShorten });
    try {
        const response = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json",
            apikey: apiKey,
        }
        
        });
        if (response.ok) {
        const jsonResponse = await response.json();
        renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
    };

Review
In this lesson, we learned how to make GET and POST requests using the Fetch API and async/await keywords. Let’s recap on the concepts covered in the previous exercises:

GET and POST requests can be created in a variety of ways.
We can use fetch() and async/await to asynchronous request data from APIs.
Promises are a type of JavaScript object that represents data that will eventually be returned from a request.
The fetch() function can be used to create requests and will return promises.
We can chain .then() methods to handle promises returned by the fetch() function.
The async keyword is used to create asynchronous functions that will return promises.
The await keyword can only be used with functions declared with the async keyword.
The await keyword suspends the program while waiting for a promise to resolve.
Congratulations on learning all about asynchronous requests using fetch(), async, and await! These concepts are fundamental to helping you develop more robust web apps!
*/