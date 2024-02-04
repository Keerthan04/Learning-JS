

/*
  1.Introduction
    A huge portion of the Internet’s data travels over HTTP/HTTPS through request-response cycles between clients and servers. Every time that you use a website, your browser sends requests to one or many servers requesting resources. Every image, meme, post, and video is requested by a client and sent in a response from a server.

    Express is a powerful but flexible Javascript framework for creating web servers and APIs. It can be used for everything from simple static file servers to JSON APIs to full production servers.

    In this lesson, you will be fixing a machine called Express Yourself in the browser. The machine is supposed to provide functionality for clients to interact with various Expressions: JavaScript objects each containing ids, names, and emojis. Currently, it looks nice, but nothing works since there is no server in place! You will be learning all the necessary skills to implement an API allowing clients to Create, Read, Update, and Delete Expressions. These four functionalities together are known as CRUD, and they form the backbone of many real-life APIs.

  2.Starting A Server
    Express is a Node module, so in order to use it, we will need to import it into our program file. To create a server, the imported express function must be invoked.

    const express = require('express');
    const app = express();

    On the first line, we import the Express library with require. When invoked on the second line, it returns an instance of an Express application. This application can then be used to start a server and specify server behavior.

    The purpose of a server is to listen for requests, perform whatever action is required to satisfy the request, and then return a response. In order for our server to start responding, we have to tell the server where to listen for new requests by providing a port number argument to a method called app.listen(). The server will then listen on the specified port and respond to any requests that come into it.

    The second argument is a callback function that will be called once the server is running and ready to receive responses.

    const PORT = 4001;
    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });

    In this example, our app.listen() call will start a server listening on port 4001, and once the server is started it will log 'Server is listening on port 4001'

  3.Writing Your First Route
    Once the Express server is listening, it can respond to any and all requests. But how does it know what to do with these requests? To tell our server how to deal with any given request, we register a series of routes. Routes define the control flow for requests based on the request’s path and HTTP verb.

    For example, if your server receives a GET request at /monsters, we will use a route to define the appropriate functionality for that HTTP verb (GET) and path (/monsters).

    The path is the part of a request URL after the hostname and port number, so in a request to localhost:4001/monsters, the path is /monsters (in this example, the hostname is localhost, the port number is 4001).

    The HTTP verb is always included in the request, and it is one of a finite number of options used to specify expected functionality. GET requests are used for retrieving resources from a server, and we will discuss additional request types in later exercises.

    Express uses app.get() to register routes to match GET requests. Express routes (including app.get()) usually take two arguments, a path (usually a string), and a callback function to handle the request and send a response.

    const moods = [{ mood: 'excited about express!'}, { mood: 'route-tastic!' }];
    app.get('/moods', (req, res, next) => {
    // Here we would send back the moods array in response
    });

    The route above will match any GET request to '/moods' and call the callback function, passing in two objects as the first two arguments. These objects represent the request sent to the server and the response that the Express server should eventually send to the client.

    If no routes are matched on a client request, the Express server will handle sending a 404 Not Found response to the client.

  4.Sending A Response
    HTTP follows a one request-one response cycle. Each client expects exactly one response per request, and each server should only send a single response back to the client per request. The client is like a customer at a restaurant ordering a large bowl of soup: the request is sent through the wait staff, the kitchen prepares the soup, and after it is prepared, the wait staff returns it to the customer. In the restaurant, it would be unfortunate if the soup never arrived back to the customer, but it would be equally problematic if the customer was given four large bowls of soup and was asked to consume them all at the exact same time. That’s impossible with only two hands!

    Express servers send responses using the .send() method on the response object. .send() will take any input and include it in the response body.

    const monsters = [
    { type: 'werewolf' }, 
    { type: 'hydra' }, 
    { type: 'chupacabra' }
    ];
    app.get('/monsters', (req, res, next) => {
    res.send(monsters);
    });

    In this example, a GET /monsters request will match the route, Express will call the callback function, and the res.send() method will send back an array of spooky monsters.

    In addition to .send(), .json() can be used to explicitly send JSON-formatted responses. .json() sends any JavaScript object passed into it.

  5.Matching Route Paths
    Express tries to match requests by route, meaning that if we send a request to <server address>:<port number>/api-endpoint, the Express server will search through any registered routes in order and try to match /api-endpoint.

    Express searches through routes in the order that they are registered in your code. The first one that is matched will be used, and its callback will be called.

    In the example to the right, you can see two .get() routes registered at /another-route and /expressions. When a GET /expressions request arrives to the Express server, it first checks /another-route‘s path because it is registered before the /expressions route. Because /another-route does not match the path, Express moves on to the next registered middleware. Since the route matches the path, the callback is invoked, and it sends a response.

    If there are no matching routes registered, or the Express server has not sent a response at the end of all matched routes, it will automatically send back a 404 Not Found response, meaning that no routes were matched or no response was ultimately sent by the registered routes.

    remeber sees as how routes are assigned and all if no then default 404

  6.Getting A Single Expression(dynamicall useage)
    Routes become much more powerful when they can be used dynamically. Express servers provide this functionality with named route parameters. Parameters are route path segments that begin with : in their Express route definitions. They act as wildcards, matching any text at that path segment. For example /monsters/:id will match both/monsters/1 and /monsters/45.

    Express parses any parameters, extracts their actual values, and attaches them as an object to the request object: req.params. This object’s keys are any parameter names in the route, and each key’s value is the actual value of that field per request.

    const monsters = { 
    hydra: { height: 3, age: 4 }, 
    dragon: { height: 200, age: 350 } 
    };
    // GET /monsters/hydra
    app.get('/monsters/:name', (req, res, next) => {
    console.log(req.params); // { name: 'hydra' }
    res.send(monsters[req.params.name]);
    });

    In this code snippet, a .get() route is defined to match /monsters/:name path. When a GET request arrives for /monsters/hydra, the callback is called. Inside the callback, req.params is an object with the key name and the value hydra, which was present in the actual request path.

    The appropriate monster is retrieved by name (the object key) from the monsters object and sent back to the client with res.send().
*/