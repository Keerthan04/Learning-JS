
//inside dome events example.js refer

/*
js takes events as objects with predefined properties and methods
  What is an Event?
    When you refresh your email inbox, double tap on a post, or scroll through a newsfeed — something 
    cool happens in your browser. These actions are known as events!

    Events on the web are user interactions and browser manipulations that you can program to trigger 
    functionality. Some other examples of events are:

    A mouse clicking on a button
    Webpage files loading in the browser
    A user swiping right on an image
    When a user does any of the above actions, they’re causing the event to be fired or be triggered. As 
    in, “a click event fired when the button was clicked”. Being able to respond to these events makes your 
    website interactive and therefore dynamic.

  1."Firing" Events
    After a specific event fires on a specific element in the document object model (or DOM), an event 
    handler function can be created to run as a response. In this lesson, we will learn about event handler 
    functions that modify and update DOM elements after an event fires.

    Let’s compare the firing of events to something more familiar: a dog trained to eat when they hear the 
    sound of a bell! (This is known as the Pavlovian conditioning.)

    As you can see in the diagram, the ringing of the bell is analogous to a JavaScript event firing. The 
    dog is trained to anticipate the ringing of the bell and this action is analogous to creating an event 
    listener. After the dog hears the bell, it’ll come over and eat its food! This response is like an event 
    handler function that executes code which, in a website, could change an element’s color, text, and much 
    more!”

    Most events in the browser take place without being noticed — the events are undetected because there 
    is no event handler associated with the event to execute an action. Event handlers are crucial for 
    creating interactive websites with JavaScript.

  2.Event Handler Registration
    You’re doing great! Now it’s time to dive into using event handler functions to create interactivity.

    Using the .addEventListener() method, we can have a DOM element listen for a specific event and execute 
    a block of code when the event is detected. The DOM element that listens for an event is called the 
    event target and the block of code that runs when the event happens is called the event handler.

    Let’s take a look at the code below:

    let eventTarget = document.getElementById('targetElement');

    eventTarget.addEventListener('click', function() {
    // this block of code will run when click event happens on eventTarget element
    });

    Let’s break this down!

    We selected our event target from the DOM using document.getElementById('targetElement').
    We used the .addEventListener() method on the eventTarget DOM element.
    The .addEventListener() method takes two arguments: an event name in string format and an event handler 
    function. We will learn about different values we can use as event names in a later lesson.
    In this example, we used the 'click' event, which fires when the user clicks on eventTarget.
    The code block in the event handler function will execute when the 'click' event is detected.
    Instead of using an anonymous function as the event handler, it’s best practice to create a named event 
    handler function. Your code will remain organized and reusable this way, even if your code gets complex. 
    Check out the syntax:

    function eventHandlerFunction() {
    // this block of code will run when click event happens
    }

    eventTarget.addEventListener('click', eventHandlerFunction);

    The named function eventHandlerFunction is passed as the second argument of the .addEventListener() 
    method instead of defining an anonymous function within the method!

  3.Adding Event Handlers
    We looked at registering event handlers using the .addEventListener() method, but there is also another 
    way!

    Event Handlers can also be registered by setting an .onevent property on a DOM element (event target). 
    The pattern for registering a specific event is to append an element with .on followed by the lowercased 
    event type name. For instance, if we want to register a click event with this pattern, we would write:

    eventTarget.onclick = eventHandlerFunction;

    Here, we give the DOM element eventTarget the .onclick property and set its value as the event handler 
    function eventHandlerFunction.

    It’s important to know that this .onevent property and .addEventListener() will both register event 
    listeners. With .onevent, it allows for one event handler function to be attached to the event target. 
    However, with the .addEventListener() method , we can add multiple event handler functions. In the 
    later exercises, we’ll be using the .addEventListener() syntax, but we wanted to also introduce the 
    .onevent syntax because both are widely used.

  4.Removing Event Handlers
    The .removeEventListener() method is used to reverse the .addEventListener() method. This method stops 
    the event target from “listening” for an event to fire when it no longer needs to. 
    .removeEventListener() also takes two arguments:

    The event type as a string
    The event handler function
    Check out the syntax of a .removeEventListener() method with a click event:

    eventTarget.removeEventListener('click', eventHandlerFunction);

    Because there can be multiple event handler functions associated with a particular event, 
    .removeEventListener() needs both the exact event type name and the name of the event handler you 
    want to remove. If .addEventListener() was provided an anonymous function, then that event listener 
    cannot be removed.
    //main is if eventlistener given anonmoys function then cant remove so better declare function and pass.

  5.Event Object Properties
    JavaScript stores events as Event objects with their related data and functionalities as properties and 
    methods. When an event is triggered, the event object can be passed as an argument to the event handler 
    function.

    function eventHandlerFunction(event){
    console.log(event.timeStamp);
    }

    eventTarget.addEventListener('click', eventHandlerFunction);

    In the example above, when the 'click' event is triggered on the eventTarget, the eventHandlerFunction 
    receives event, the Event object, which has information related to the 'click' event. Then, we log the 
    time it took for the event to be triggered since the document was loaded by accessing the .timeStamp 
    property of the event object.

    There are pre-determined properties associated with event objects. You can call these properties to see 
    information about the event, for example:

    the .target property to reference the element that the event is registered to.
    the .type property to access the name of the event.
    the .timeStamp property to access the number of milliseconds that passed since the document loaded and 
    the event was triggered.

  6.Event Types
    Beyond the click event, there are all types of DOM events that can fire in a browser! It’s important to 
    know most events in the DOM take place without being noticed because there are no event handlers 
    connected to them.

    It’s also important to know some registered events don’t depend on user interactions to fire. For 
    instance, the load event fires after website files completely load in the browser.

    Browsers can fire many other events without a user — you can check out a list of events on the MDN 
    Events Reference page.

    Many events need user interaction with the DOM to fire. One user interaction event you’ve become 
    familiar with is the click event. A click event fires when the user presses and releases a mouse 
    button on an element in the DOM.

    Click Event Image
    In the rest of this lesson, you’ll explore more user interaction event types like the mouse and 
    keyboard events. To explore more event types, check out the MDN Events Reference.

  7.Mouse Events(learn all mouse events what and how)
    When you use a mouse device on a website, mouse events fire. You’ve seen the click and wheel events, 
    but, there are even more mouse events to explore!

    The mousedown event is fired when the user presses a mouse button down. This is different from a 
     event because mousedown doesn’t need the mouse button to be released to fire.

    Mouse Down Event Image
    The mouseup event is fired when the user releases the mouse button. This is different from the click 
    and mousedown events because mouseup doesn’t depend on the mouse button being pressed down to fire.

    Mouse Up Event Image
    The mouseover event is fired when the mouse enters the content of an element.

    Mouse Over Event Image
    The mouseout event is fired when the mouse leaves an element.

  8.Keyboard Events
    Other popular types of events are keyboard events! keyboard events are triggered by user interaction 
    with keyboard keys in the browser.

    The keydown event is fired while a user presses a key down.Key Down Event Image

    The keyup event is fired while a user releases a key.Key Up Event Image

    The keypress event is fired when a user presses a key down and releases it. This is different from 
    using keydown and keyup events together, because those are two complete events and keypress is one 
    complete event.Key P ress Event Image

    Keyboard events have unique properties assigned to their event objects like the .key property that 
    stores the values of the key pressed by the user. You can program the event handler function to react 
    to a specific key, or react to any interaction with the keyboard.

Review
Congrats, you completed the lesson! Now you’ve learned about JavaScript events and you can leverage these events on the DOM to create interactivity with event handlers.

Let’s review what you’ve learned:

You can register events to DOM elements using the addEventListener() method.
The addEventListener() method takes two arguments: an event type and an event handler function.
When an event is triggered on the event target, the registered event handler function executes.
Event handler functions can also be registered as values of onevent properties of their event target.
Event object properties like .target, .type, and .timeStamp are used to provide information about the event.
The addEventListener() method can be used to add multiple event handler functions to a single event.
The removeEventListener() method stops specific event handlers from “listening” for specific events firing.
*/